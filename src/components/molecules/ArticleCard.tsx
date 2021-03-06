import { Typography, Box, Card, CardActionArea } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';

import ArticleMeta from 'components/atoms/ArticleMeta';
import TypographyRowControl from 'components/atoms/TypographyRowControl';

type Props = {
  title: string;
  date: Date;
  name: string;
  content: string;
  href: string;
};

const ArticleCard: FC<Props> = ({ title, date, name, content, href }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <Link href={href} passHref>
        <CardActionArea sx={{ height: '100%' }}>
          <Box display="flex" flexDirection="column" height="100%" p={1}>
            <Box mb={1.5}>
              <Typography component="b" variant="h4">
                {title}
              </Typography>
              <ArticleMeta date={date} name={name} />
            </Box>
            <Box flex="1 1 auto" mb={1.5}>
              <TypographyRowControl maxRow={2} maxRowPc={3}>
                {content}
              </TypographyRowControl>
            </Box>
            <Typography align="right" variant="body2">
              続きを読む
            </Typography>
          </Box>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default ArticleCard;
