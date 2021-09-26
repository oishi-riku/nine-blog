import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Container, Typography, Box, Paper } from '@mui/material';

import Head from 'next/head';
import ArticleArea from 'components/molecules/ArticleArea';
import { getArticle, getAllArticles } from 'domains/microCMS/services/article';
import { Article as ArticleSingle } from 'domains/microCMS/models/article';

type StaticProps = {
  article: ArticleSingle;
};

const Article: NextPage<StaticProps> = ({ article }) => {
  return (
    <>
      <Head>
        <title>{`${article.title} 3-5 9人ブログ`}</title>
        <meta name="description" content={`${article.title} 3-5 9人ブログ`} />
      </Head>
      <Container>
        <Paper sx={{ p: 2 }} component="article">
          <Box mb={3}>
            <Typography variant="h1">{article.title}</Typography>
            <Box
              display="flex"
              gap={1}
              fontSize="body2.fontSize"
              color="primary"
            >
              <time>{article.createdAt}</time>
              <span>{article.name}</span>
            </Box>
          </Box>
          <ArticleArea content={article.content} />
        </Paper>
      </Container>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getAllArticles({ limit: '10000' });
  const paths = articles.contents.map((a) => ({
    params: {
      id: a.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const p = params as { id: string };
  const article = await getArticle(p.id);

  return {
    props: {
      article,
    },
  };
};

export default Article;
