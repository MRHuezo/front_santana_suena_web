import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import VideoCompetitor from './VideoCompetitor';

export default function ItemCompetitor({data}) {

  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={data.photo}>
            R
          </Avatar>
        }
        sx={{p: 1}}
        title={data.name}
        subheader={data.name_song}
      />
      <VideoCompetitor url_video={data.url_video} />
    </Card>
  );
}