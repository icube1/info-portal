import {ArticleAttachmentType} from "@/src/Symbols";
import {Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography} from "@mui/material";
import {ThumbUp} from "@mui/icons-material";

const NewsInfoCard = ({ data, ...cardProps }) => {
  const newsImage = data.attachments.find((attachment) => attachment.type === ArticleAttachmentType.Image)
  return (
    <Card {...cardProps}>
      <CardHeader
        title={data.title}
        subheader={data.author.name}
      />
      {
        !!newsImage && <CardMedia image={newsImage.data} title={data.title} sx={{ height: 300 }} />
      }
      <CardContent>
        <Typography variant="body2" color="text.secondary">{data.description}</Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <ThumbUp />
        </IconButton>
        <Button size="small">Подробнее</Button>
      </CardActions>
    </Card>
  )
}

export default NewsInfoCard
