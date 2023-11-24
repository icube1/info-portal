import PageLayout from "@/src/components/Layout/PageLayout";

import InfoNewsCard from "@/src/components/News/NewsCards/InfoNewsCard";
import Box from "@mui/material/Box";
import {ArticaleType} from "@/src/Symbols";
import BreakingNewCard from "@/src/components/News/NewsCards/BreakingNewsCard";

const NewsPageView = ({newsList}) => {
  const actualBreakingNews = newsList.filter(news => news.type === ArticaleType.breaking)[0]


  return (
    <PageLayout title='News'>
      {
        !!actualBreakingNews && <BreakingNewCard key={`breaking-${actualBreakingNews.id}`} data={actualBreakingNews} sx={{ mb: 4 }} />
      }
      <Box sx={{display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row' }}>{
        newsList.filter(news => news.type === ArticaleType.info).map((news) => <InfoNewsCard key={`info-${news.id}`} data={news} sx={{
          width: 300
        }} />)
      }</Box>
    </PageLayout>
  )
}





export default NewsPageView
