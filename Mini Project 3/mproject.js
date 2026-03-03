const topStoriesURL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'

//https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty

const getTopStories = async () => {
    const response = await fetch(topStoriesURL);
    const topStories = await response.json();

    //console.log(topStories) // array fo all story ids

    for (let i = 0; i < 100; i++) {
        const storyRes = await fetch(`https://hacker-news.firebaseio.com/v0/item/${topStories[i]}.json?print=pretty`);
        const storyData = await storyRes.json()

        console.log(storyData.title)

        //now figure out how to utilize these stories and display the data on you web page
    }
}
getTopStories();

