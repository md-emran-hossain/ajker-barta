import React from 'react';
// import styles from './International.module.css';

const newsData = [
    {
        "author": "Dan Peck",
        "title": "Hurricane Hanna makes landfall around 5 p.m. on Saturday.",
        "description": "Hurricane Hanna battered southern Texas with sustained winds of 75 mph and continued to deliver heavy rain and flash flooding as it moved inland late Saturday.",
        "url": "https://abcnews.go.com/US/hurricane-hanna-makes-landfall-texas/story?id=71985566",
        "source": "ABC News",
        "image": "https://s.abcnews.com/images/US/hanna-swimmer-mo_hpMain_20200725-163152_2_4x3t_384.jpg",
        "category": "general",
        "language": "en",
        "country": "us",
        "published_at": "2020-07-26T01:04:23+00:00"
    },
    {
        "author": "TMZ Staff",
        "title": "Nicki Minaj's Husband Gets Permission To Be There For Baby's Birth",
        "description": "Kenneth can be in the room when Nicki gives birth ... a judge just granted his request to tweak his pre-trial release conditions so he can travel with Nicki. With the court's order in place, KP can travel with Nicki periodically on biz…",
        "url": "https://www.tmz.com/2020/07/30/nicki-minaj-husband-asks-judge-be-there-child-birth/",
        "source": "TMZ.com",
        "image": "https://imagez.tmz.com/image/c1/4by3/2020/07/30/c115ad2dc849438a97a0ad3097b416df_md.jpg",
        "category": "general",
        "language": "en",
        "country": "us",
        "published_at": "2020-08-01T05:34:47+00:00"
    },
    {
        "author": "Michael Rothstein",
        "title": "New Lions safety Jayron Kearse suspended three games",
        "description": "Kearse, 26, signed with the Lions in March after four seasons in Minnesota, where he played in 62 games with five starts, making 79 tackles and defending eight passes.",
        "url": "https://www.espn.com/nfl/story/_/id/29572640/new-lions-safety-jayron-kearse-suspended-three-games",
        "source": "ESPN",
        "image": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F0111%2Fr651071_1296x729_16%2D9.jpg",
        "category": "sports",
        "language": "en",
        "country": "us",
        "published_at": "2020-07-31T23:23:14+00:00"
    },
    {
        "author": "Dan Peck",
        "title": "Hurricane Hanna makes landfall around 5 p.m. on Saturday.",
        "description": "Hurricane Hanna battered southern Texas with sustained winds of 75 mph and continued to deliver heavy rain and flash flooding as it moved inland late Saturday.",
        "url": "https://abcnews.go.com/US/hurricane-hanna-makes-landfall-texas/story?id=71985566",
        "source": "ABC News",
        "image": "https://s.abcnews.com/images/US/hanna-swimmer-mo_hpMain_20200725-163152_2_4x3t_384.jpg",
        "category": "general",
        "language": "en",
        "country": "us",
        "published_at": "2020-07-26T01:04:23+00:00"
    },
    {
        "author": "TMZ Staff",
        "title": "Nicki Minaj's Husband Gets Permission To Be There For Baby's Birth",
        "description": "Kenneth can be in the room when Nicki gives birth ... a judge just granted his request to tweak his pre-trial release conditions so he can travel with Nicki. With the court's order in place, KP can travel with Nicki periodically on biz…",
        "url": "https://www.tmz.com/2020/07/30/nicki-minaj-husband-asks-judge-be-there-child-birth/",
        "source": "TMZ.com",
        "image": "https://imagez.tmz.com/image/c1/4by3/2020/07/30/c115ad2dc849438a97a0ad3097b416df_md.jpg",
        "category": "general",
        "language": "en",
        "country": "us",
        "published_at": "2020-08-01T05:34:47+00:00"
    },
    {
        "author": "Michael Rothstein",
        "title": "New Lions safety Jayron Kearse suspended three games",
        "description": "Kearse, 26, signed with the Lions in March after four seasons in Minnesota, where he played in 62 games with five starts, making 79 tackles and defending eight passes.",
        "url": "https://www.espn.com/nfl/story/_/id/29572640/new-lions-safety-jayron-kearse-suspended-three-games",
        "source": "ESPN",
        "image": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F0111%2Fr651071_1296x729_16%2D9.jpg",
        "category": "sports",
        "language": "en",
        "country": "us",
        "published_at": "2020-07-31T23:23:14+00:00"
    },
    {
        "author": "Dan Peck",
        "title": "Hurricane Hanna makes landfall around 5 p.m. on Saturday.",
        "description": "Hurricane Hanna battered southern Texas with sustained winds of 75 mph and continued to deliver heavy rain and flash flooding as it moved inland late Saturday.",
        "url": "https://abcnews.go.com/US/hurricane-hanna-makes-landfall-texas/story?id=71985566",
        "source": "ABC News",
        "image": "https://s.abcnews.com/images/US/hanna-swimmer-mo_hpMain_20200725-163152_2_4x3t_384.jpg",
        "category": "general",
        "language": "en",
        "country": "us",
        "published_at": "2020-07-26T01:04:23+00:00"
    },
    {
        "author": "TMZ Staff",
        "title": "Nicki Minaj's Husband Gets Permission To Be There For Baby's Birth",
        "description": "Kenneth can be in the room when Nicki gives birth ... a judge just granted his request to tweak his pre-trial release conditions so he can travel with Nicki. With the court's order in place, KP can travel with Nicki periodically on biz…",
        "url": "https://www.tmz.com/2020/07/30/nicki-minaj-husband-asks-judge-be-there-child-birth/",
        "source": "TMZ.com",
        "image": "https://imagez.tmz.com/image/c1/4by3/2020/07/30/c115ad2dc849438a97a0ad3097b416df_md.jpg",
        "category": "general",
        "language": "en",
        "country": "us",
        "published_at": "2020-08-01T05:34:47+00:00"
    },
    {
        "author": "Michael Rothstein",
        "title": "New Lions safety Jayron Kearse suspended three games",
        "description": "Kearse, 26, signed with the Lions in March after four seasons in Minnesota, where he played in 62 games with five starts, making 79 tackles and defending eight passes.",
        "url": "https://www.espn.com/nfl/story/_/id/29572640/new-lions-safety-jayron-kearse-suspended-three-games",
        "source": "ESPN",
        "image": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F0111%2Fr651071_1296x729_16%2D9.jpg",
        "category": "sports",
        "language": "en",
        "country": "us",
        "published_at": "2020-07-31T23:23:14+00:00"
    },
]

const International = () => {
    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-12 gap-2">
                <div className='md:col-span-8 sm:col-span-6 ' style={{ height: '100%' }}>
                    {/* <div className={`${styles.newCard} " border border-gray-400 p-2"`}>
                        <a href="#" className={styles.newsCard__cardLink}></a>
                        <img src="https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F0111%2Fr651071_1296x729_16%2D9.jpg" className={styles.newsCard__image} />
                        <div className={styles.newsCard__textWrapper}>
                            <h2 className={styles.newsCard__title}>Amazing First Title</h2>
                            <div className={styles.newsCard__postDate}>Jan 29, 2018</div>
                            <div className={styles.newsCard__detailsWrapper}>
                                <p className={styles.newsCard__excerpt}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur&hellip;</p>
                                <a href="#" className={styles.newsCard__readMore}>Read more <i className="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                    </div> */}
                    <div className="news-card" >
                        <a href="#" className="news-card__card-link"></a>
                        <img src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="news-card__image" />
                        <div className="news-card__text-wrapper">
                            <h2 className="news-card__title">Amazing First Title</h2>
                            <div className="news-card__post-date">Jan 29, 2018</div>
                            <div className="news-card__details-wrapper">
                                <p className="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur&hellip;</p>
                                <a href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="md:col-span-4 sm:col-span-6">
                    <div className='grid grid-cols-1 gap-1'>
                        {/* <div className={`${styles.newCard} " border border-gray-400 p-2"`}>
                        <a href="#" className={styles.newsCard__cardLink}></a>
                        <img src="https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F0111%2Fr651071_1296x729_16%2D9.jpg" className={styles.newsCard__image} />
                        <div className={styles.newsCard__textWrapper}>
                            <h2 className={styles.newsCard__title}>Amazing First Title</h2>
                            <div className={styles.newsCard__postDate}>Jan 29, 2018</div>
                            <div className={styles.newsCard__detailsWrapper}>
                                <p className={styles.newsCard__excerpt}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur&hellip;</p>
                                <a href="#" className={styles.newsCard__readMore}>Read more <i className="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.newCard} " border border-gray-400 p-2"`}>
                        <a href="#" className={styles.newsCard__cardLink}></a>
                        <img src="https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F0111%2Fr651071_1296x729_16%2D9.jpg" className={styles.newsCard__image} />
                        <div className={styles.newsCard__textWrapper}>
                            <h2 className={styles.newsCard__title}>Amazing First Title</h2>
                            <div className={styles.newsCard__postDate}>Jan 29, 2018</div>
                            <div className={styles.newsCard__detailsWrapper}>
                                <p className={styles.newsCard__excerpt}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur&hellip;</p>
                                <a href="#" className={styles.newsCard__readMore}>Read more <i className="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                    </div> */}
                        <div>
                            <div className="news-card">
                                <a href="#" className="news-card__card-link"></a>
                                <img src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="news-card__image" />
                                <div className="news-card__text-wrapper">
                                    <h2 className="news-card__title">Amazing First Title</h2>
                                    <div className="news-card__post-date">Jan 29, 2018</div>
                                    <div className="news-card__details-wrapper">
                                        <p className="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                        <a href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="news-card">
                                <a href="#" className="news-card__card-link"></a>
                                <img src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="news-card__image" />
                                <div className="news-card__text-wrapper">
                                    <h2 className="news-card__title">Amazing First Title</h2>
                                    <div className="news-card__post-date">Jan 29, 2018</div>
                                    <div className="news-card__details-wrapper">
                                        <p className="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                        <a href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default International;