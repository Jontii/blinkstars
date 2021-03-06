import { Box, Container, makeStyles } from '@material-ui/core';
import React, { FC, useCallback, useEffect, useState } from 'react';
import Page from 'src/components/Page';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { Theme } from 'src/theme';
import { Product } from 'src/types/product';
import axios from 'src/utils/axios';
import Header from './Header';
import Results from './Results';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: 100
  }
}));

const ProductListView: FC = () => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = useCallback(async () => {
    try {
      const response = await axios.get<{ products: Product[] }>(
        '/api/products'
      );

      if (isMountedRef.current) {
        setProducts(response.data.products);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Page className={classes.root} title="Product List">
      <Container maxWidth={false}>
        <Header />
        {products && (
          <Box mt={3}>
            <Results products={products} />
          </Box>
        )}
      </Container>
    </Page>
  );
};

export default ProductListView;
