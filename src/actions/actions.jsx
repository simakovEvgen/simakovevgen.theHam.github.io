export const getNews = (news) => {
    return {
        type: 'GET_NEWS',
        payload: news
    }
};
