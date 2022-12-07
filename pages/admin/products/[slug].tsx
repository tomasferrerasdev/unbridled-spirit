import { DriveFileRenameOutline, SaveOutlined } from '@mui/icons-material';
import {
  Box,
  Button,
  capitalize,
  Card,
  CardActions,
  CardMedia,
  Checkbox,
  Chip,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { unbridledSpiritAPI } from '../../../api';
import { AdminLayout } from '../../../components/layouts';
import { productsDB } from '../../../database';
import { Iproduct } from '../../../interfaces';
import FormData from '../../../interfaces/formData';
import { Product } from '../../../models';

const validTypes = [
  'kentucky',
  'tennessee',
  'straight',
  'single-barrel',
  'accessories',
];
const validSizes = ['1L', '750ml', '375ml', '200ml'];

interface Props {
  product: Iproduct;
}

const ProductAdminPage: FC<Props> = ({ product }) => {
  const router = useRouter();

  const [newTagValue, setNewTagValue] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch,
    control,
  } = useForm({
    defaultValues: product,
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name === 'title') {
        const newSlug =
          value.title
            ?.trim()
            .replaceAll(' ', '-')
            .replaceAll("'", '')
            .toLowerCase() || '';

        setValue('slug', newSlug);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, setValue]);

  const onNewTag = () => {
    const newTag = newTagValue.trim().toLowerCase();
    setNewTagValue('');
    const currentTags = getValues('tags');

    if (currentTags.includes(newTag)) {
      return;
    }

    currentTags.push(newTag);
  };

  const onDeleteTag = (tag: string) => {
    const updatedTags = getValues('tags').filter((t) => t !== tag);
    setValue('tags', updatedTags, { shouldValidate: true });
  };

  const onFilesSelected = async ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (!target.files || target.files.length === 0) {
      return;
    }

    try {
      for (const file of target.files) {
        const formData = new FormData();

        formData.append('file', file);
        const { data } = await unbridledSpiritAPI.post<{ message: string }>(
          '/admin/upload',
          formData
        );

        setValue('images', [...getValues('images'), data.message], {
          shouldValidate: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteImage = (image: string) => {
    setValue(
      'images',
      getValues('images').filter((img) => img !== image),
      {
        shouldValidate: true,
      }
    );
  };

  const onSubmit = async (form: FormData) => {
    if (form.images.length < 1) return alert('One image at least');
    setIsSaving(true);

    try {
      const { data } = await unbridledSpiritAPI({
        url: 'admin/products',
        method: form._id ? 'PUT' : 'POST', //if _id update if not create
        data: form,
      });

      if (!form._id) {
        router.replace(`/admin/products/${form.slug}`);
      } else {
        setIsSaving(false);
      }
    } catch (error) {
      console.log(error);
      setIsSaving(false);
    }
  };

  return (
    <AdminLayout
      title={'Product'}
      subTitle={`Editing: ${product.title}`}
      icon={<DriveFileRenameOutline />}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" justifyContent="end" sx={{ mb: 1 }}>
          <Button
            color="secondary"
            startIcon={<SaveOutlined />}
            sx={{ width: '150px' }}
            type="submit"
            disabled={isSaving}
          >
            Save
          </Button>
        </Box>

        <Grid container spacing={2}>
          {/* Data */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Title"
              variant="filled"
              fullWidth
              sx={{ mb: 1 }}
              {...register('title', {
                required: 'Required field',
                minLength: { value: 2, message: 'At least 2 characters' },
              })}
              error={!!errors.title}
              helperText={errors.title?.message}
            />

            <TextField
              label="Description"
              variant="filled"
              fullWidth
              multiline
              sx={{ mb: 1 }}
              {...register('description', {
                required: 'Required field',
              })}
              error={!!errors.description}
              helperText={errors.description?.message}
            />

            <TextField
              label="Inventory"
              type="number"
              variant="filled"
              fullWidth
              sx={{ mb: 1 }}
              {...register('inStock', {
                required: 'Required field',
                min: { value: 0, message: 'Minimum allowed is 0' },
              })}
              error={!!errors.inStock}
              helperText={errors.inStock?.message}
            />

            <TextField
              label="Price"
              type="number"
              variant="filled"
              fullWidth
              sx={{ mb: 1 }}
              {...register('price', {
                required: 'Required field',
                min: { value: 1, message: 'Minimum allowed is 1' },
              })}
              error={!!errors.price}
              helperText={errors.price?.message}
            />

            <Divider sx={{ my: 1 }} />

            <FormControl sx={{ mb: 1 }}>
              <Controller
                name="type"
                control={control}
                defaultValue={undefined}
                render={({ field }) => (
                  <FormControl>
                    <FormLabel>Type</FormLabel>
                    <RadioGroup row {...field}>
                      {validTypes.map((option) => (
                        <FormControlLabel
                          key={option}
                          value={option}
                          control={<Radio color="secondary" />}
                          label={capitalize(option)}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                )}
              />
            </FormControl>

            <Controller
              name="sizes"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth margin="dense" error={!!errors.sizes}>
                  <FormLabel>Sizes</FormLabel>
                  <FormGroup>
                    {validSizes.map((size) => (
                      <FormControlLabel
                        key={size}
                        label={size}
                        control={
                          <Checkbox
                            value={size}
                            checked={field.value.some((val) => val === size)}
                            onChange={({ target: { value } }, checked) => {
                              checked
                                ? field.onChange([...field.value, value])
                                : field.onChange(
                                    field.value.filter((val) => val !== value)
                                  );
                            }}
                          />
                        }
                      />
                    ))}
                  </FormGroup>
                  <FormHelperText>
                    {capitalize(`${(errors.sizes as any)?.message || ''}`)}
                  </FormHelperText>
                </FormControl>
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Slug - URL"
              variant="filled"
              fullWidth
              sx={{ mb: 1 }}
              {...register('slug', {
                required: 'Required field',
                validate: (val) =>
                  val.trim().includes(' ')
                    ? 'spaces are not allowed'
                    : undefined,
              })}
              error={!!errors.slug}
              helperText={errors.slug?.message}
            />

            <TextField
              label="Tags"
              variant="filled"
              fullWidth
              sx={{ mb: 1 }}
              helperText="Press [spacebar] to add"
              value={newTagValue}
              onChange={({ target }) => setNewTagValue(target.value)}
              onKeyUp={({ code }) =>
                code === 'Space' ? onNewTag() : undefined
              }
            />

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                listStyle: 'none',
                p: 0,
                m: 0,
              }}
              component="ul"
            >
              {getValues('tags').map((tag) => {
                return (
                  <Chip
                    key={tag}
                    label={tag}
                    onDelete={() => onDeleteTag(tag)}
                    color="primary"
                    size="small"
                    sx={{ mb: 1, mt: 1, mr: 1 }}
                  />
                );
              })}
            </Box>
            <TextField
              label="ABV"
              variant="filled"
              fullWidth
              sx={{ mb: 1 }}
              {...register('ABV', {
                required: 'Required field',
              })}
              error={!!errors.ABV}
              helperText={errors.ABV?.message}
            />

            <Divider sx={{ my: 2 }} />

            <Box display="flex" flexDirection="column">
              <FormLabel sx={{ mb: 1 }}>Image</FormLabel>

              <Button variant="contained" component="label" sx={{ mb: 1 }}>
                Upload image
                <input
                  hidden
                  accept="image/png, image/gif, image/jpeg, image/webp"
                  multiple
                  type="file"
                  onChange={onFilesSelected}
                />
              </Button>

              <Grid container spacing={2}>
                {getValues('images').map((img) => (
                  <Grid item xs={4} sm={3} key={img}>
                    <Card>
                      <CardMedia
                        component="img"
                        className="fadeIn"
                        image={img}
                        alt={img}
                      />
                      <CardActions sx={{ p: 0 }}>
                        <Button
                          fullWidth
                          color="error"
                          sx={{ mt: '.5rem' }}
                          variant="outlined"
                          onClick={() => onDeleteImage(img)}
                        >
                          Delete
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </form>
    </AdminLayout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { slug = '' } = query;

  let product: Iproduct | null;
  if (slug === 'new') {
    const tempProduct = JSON.parse(JSON.stringify(new Product()));
    delete tempProduct._id;
    tempProduct.images = [
      'https://res.cloudinary.com/tomasferreras/image/upload/v1658800051/v2a1javmf1ri478nq9us.jpg',
    ];
    product = tempProduct;
  } else {
    product = await productsDB.getProductBySlug(slug.toString());
  }

  if (!product) {
    return {
      redirect: {
        destination: '/admin/products',
        permanent: false,
      },
    };
  }

  return {
    props: {
      product,
    },
  };
};

export default ProductAdminPage;
