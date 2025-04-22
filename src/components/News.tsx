import { useState } from 'react';

interface NewsItem {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
}

const mockNews: NewsItem[] = [
  {
    id: 1,
    title: 'Your Anonymous Feedback: Q1 Partner Experience Survey',
    author: 'Emily Wayne',
    date: '09 April 2025',
    content: `Dear Partner,

We're launching our first quarterly survey to better understand your experience and satisfaction as our partner.

Your feedback is completely anonymous and highly valued. This survey touches on aspects of the support and communication you receive, helping us identify areas where we can improve your overall experience with our program. We plan to run this anonymous check-in quarterly.

You'll find the short survey displayed at the top of your account interface starting today. Please take a few moments to share your anonymous thoughts by April 30th, 2025.

Thanks for helping us improve with your honest feedback.

Best regards,
Stripcash Team`
  },
  {
    id: 2,
    title: 'Chinese New Year Promo – Let\'s Share Good Fortune!',
    author: 'Emily Wayne',
    date: '09 January 2025',
    content: 'Chinese New Year promotion details...'
  },
  {
    id: 3,
    title: 'Maximize Your Conversions This Holiday Season with our Christmas & New Year Promos!',
    author: 'Emily Wayne',
    date: '18 December 2024',
    content: 'Holiday season promotion details...'
  },
  {
    id: 4,
    title: 'Something is happening in Asia—and it could boost your affiliate earnings',
    author: 'Emily Wayne',
    date: '13 December 2024',
    content: 'Asia market update details...'
  },
  {
    id: 5,
    title: 'Black Friday & Cyber Monday Promotions',
    author: 'Emily Wayne',
    date: '19 November 2024',
    content: 'Black Friday promotion details...'
  },
  {
    id: 6,
    title: 'Check Out the Updated End-of-Summer Promo Results',
    author: 'Emily Wayne',
    date: '11 September 2024',
    content: 'Summer promotion results...'
  }
];

const News = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem>(mockNews[0]);

  return (
    <div className="text-white">
      <h1 className="text-2xl font-medium mb-6">News</h1>
      
      <div className="flex gap-6">
        {/* News List */}
        <div className="w-80 bg-white/5 rounded-lg overflow-hidden">
          {mockNews.map((news) => (
            <div
              key={news.id}
              className={`p-4 cursor-pointer hover:bg-white/10 border-b border-white/10 last:border-b-0 transition-colors ${selectedNews.id === news.id ? 'bg-white/10' : ''}`}
              onClick={() => setSelectedNews(news)}
            >
              <h3 className="text-sm font-medium mb-2">{news.title}</h3>
              <div className="flex items-center text-xs text-gray-400">
                <span>{news.author}</span>
                <span className="mx-2">•</span>
                <span>{news.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* News Content */}
        <div className="flex-1 bg-white/5 rounded-lg p-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-medium mb-2">{selectedNews.title}</h2>
            <div className="flex items-center text-sm text-gray-400 mb-8">
              <span>{selectedNews.author}</span>
              <span className="mx-2">•</span>
              <span>{selectedNews.date}</span>
            </div>
            <div className="text-gray-300 whitespace-pre-line leading-relaxed">
              {selectedNews.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
