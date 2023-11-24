import {ArticleAttachmentType} from "@/src/Symbols";
import {Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";

const BreakingNewCard = ({ data, sx = {}, ...cardProps }) => {
  const newsImage = data.attachments.find((attachment) => attachment.type === ArticleAttachmentType.Image)
  return (
    <Card {...cardProps} sx={{ ...sx ,backgroundColor: "#FF8C00" }}>
      <CardHeader
        title={data.title}
      />
      {
        !!newsImage && <CardMedia image={newsImage.data} title={data.title} sx={{ height: 300 }} />
      }
      <CardContent>
        <Typography variant="body2" color="text.secondary">{data.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Подробнее</Button>
      </CardActions>
    </Card>
  )
}

export default BreakingNewCard
