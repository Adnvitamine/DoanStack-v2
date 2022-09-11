import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'


export default function Home() {
  const [colorInfo, setColorInfo ] = useState('rgba(207, 206, 206, 0.2)');
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "game.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  const changeColor = () =>{
    const colorArray = ['rgba(207, 206, 206, 0.2)','rgba(209, 113, 113, 0.2)','rgba(216, 218, 114, 0.2)','rgba(123, 233, 120, 0.2)','rgba(120, 229, 233, 0.2)','rgba(233, 120, 227, 0.2)']
    const num = Math.floor(Math.random()*colorArray.length);
    console.log(num);
    console.log(colorArray[num]);
    setColorInfo(colorArray[num]);

  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Doan Nguyen bio" />
        <link rel="preload" as="font" href="./font.ttf" type="font/ttf" />
        <script src="//cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.min.js" async ></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      
        {/*Phaser* <div className={styles.phaserContain}></div>*/}
        <div className={styles.phaserSection}>
                <div className={styles.phaserCover}></div>
        </div>
        
        

        {/*Blog*/}
        {/* <div className={styles.blogSection}>
              <div className={styles.post}>
                <div className={styles.postContent}>
                <h2>How to build a fullstack App</h2>
                <img style={{float:"right", marginLeft: "10px", marginTop: '15px'}} src='https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80' width='55%'></img>
                <p>
                    Before you start developing or creating an app, you need to understand the big picture first, so that you know what it will take and what things you need to learn.

                    There might be things that you already understand and know how to do, but you don't know how these skills play in the big picture.

                    So what does an app need?

                    Generally speaking, a full-stack app has a few components that are working together.

                    Database ⇒ to store data

                    Storage ⇒ to store assets

                    API ⇒ to process request

                    User Interface ⇒ to let users interact with your app

                    One thing to note is that hosting won't be covered in this article. While it is an essential aspect of distributing your apps to your users, it is not something you need to worry about when you're in development.

                    Most likely, you'll be developing on a local machine (i.e. your laptop) in localhost. However, the main thing you need to know about hosting is it's a place where all of the components live.

                    You probably have heard of the terms frontend and backend. In this case, the database, the storage, and the API collectively are called the backend, and the user interface is called the frontend.

                    Most, if not all, full-stack apps must have at least a database, an API, and a user interface. Storage is optional depending on the requirements of the system you're building.

                    So what are these components? Let's start with the easy one, the user interface.
                </p>
                
                </div>
              </div>
              <div className={styles.post}>
                <div className={styles.postContent}>
                  <h2>Top Front-End Development Trends You Should Follow in 2021</h2>
                  <img style={{float:"left", marginRight: "10px", marginTop: '15px'}} src='https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80' width='55%'></img>
                  <p>Frontend web development standards and trends change faster than they can be implemented. This makes it difficult for developers to separate the wheat from the chaff; the game-changing trends from the fads.
                  In this blog post, we have shared our thoughts and predictions for front-end development trends in 2021. Read this blog to know more about the latest in the front-end realm. You can also understand how these trends will affect the front-end landscape, as well as your front-end development journey.
                  Every year, JavaScript grows stronger. It has been the most popular programming language in the world for eight years in a row, according to the 2020 Stack Overflow Developer Survey.
                  There are more and more development services that require JavaScript skills every day. In terms of business, this means that more and more development partners will offer JS services. The language is versatile and can be used to implement a variety of requirements.
                  While JavaScript remains at the forefront of software development, new technologies are coming up as a possible alternative to JavaScript. One of these competitors is Blazor — it is a framework that allows us to create browser-based apps using C#, and it’s already been dubbed a JavaScript killer.
                  </p>
                </div>
              </div>
              <div className={styles.post}>
                <div className={styles.postContent}>
                  <h2>The Purpose Of Life Is Not Happiness: It’s Usefulness</h2>
                  <img style={{float:"right", marginLeft: "10px", marginTop: '15px'}} src='https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' width='55%'></img>
                  <p>
                  For the longest time, I believed that there’s only one purpose of life: And that is to be happy.
                  Right? Why else go through all the pain and hardship? It’s to achieve happiness in some way.
                  And I’m not the only person who believed that. In fact, if you look around you, most people are pursuing happiness in their lives.
                  That’s why we collectively buy shit we don’t need, go to bed with people we don’t love and try to work hard to get the approval of people we don’t like.
                  Why do we do these things? To be honest, I don’t care what the exact reason is. I’m not a scientist. All I know is that it has something to do with history, culture, media, economy, psychology, politics, the information era, and you name it. The list is endless.
                  We are who are. 
                  Let’s just accept that. Most people love to analyze why people are not happy or don’t live fulfilling lives. I don’t necessarily care about the why.
                  I care more about how we can change.
                  Just a few short years ago, I did everything to chase happiness.
                  You buy something, and you think that makes you happy.
                  You hook up with people and think that makes you happy.
                  You get a well-paying job you don’t like and think that makes you happy.
                  You go on holiday, and you think that makes you happy.
                  But at the end of the day, you’re lying in your bed (alone or next to your spouse), and you think: “What’s next in this endless pursuit of happiness?”
                  Well, I can tell you what’s next: You, chasing something random that you believe makes you happy.
                  It’s all a façade. A hoax. A story that’s been made up.
                  Did Aristotle lie to us when he said:
                  “Happiness is the meaning and the purpose of life, the whole aim and end of human existence.”
                  I think we have to look at that quote from a different angle. Because when you read it, you think that happiness is the main goal. And that’s kind of what the quote says as well.
                  </p>
                </div>
              </div>
          
        </div> */}

        {/*Info Section*/}
        <div className={styles.infoSection} onClick={()=>{changeColor()}}>
          <div className={styles.myInfoPanel}>
          <svg className={styles.nextPic} viewBox="0 0 148 90" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z" fill="#000" fillRule="nonzero"></path></svg>
          <div className={styles.reactPic}>
          <Image layout="fill" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="react" />
          </div>
            <div className={styles.myInfo} style={{backgroundColor: `${colorInfo}`, transition: "background-color 0.5s"}}>
              <h2>The secret of getting ahead is getting started.</h2>
              <p>&ldquo;My name is Doan and I am a web developer with a lot of curiosity. I started my adventure with designing
                 and coding websites as a teenager and since then I&apos;m developing my skills constantly. Programming is not only a passion, but
                  also my medecine. Yes, sometimes I feel like interacting with machines is easier than with people
                  Thanks to my detail-oriented personnality, I&apos;m able to build complete web applications. 
                  Thats why, despite the fact that front-end is the apple of my eye in most projects I work rather as a full-stack developer.&ldquo;</p>
            </div>
            <div className={styles.myPic}>
            <Image layout="fill"  src='https://res.cloudinary.com/hg7nb1gfv/image/upload/v1627444567/bpu9fk8zdajvsdfpy65b.png' alt='myPic' />
            </div>
            </div>

      </div>
        
      </main>
      
    </div>
  )
}
