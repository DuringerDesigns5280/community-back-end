
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('mentors').del()
    .then(function () {
      // Inserts seed entries
      return knex('mentors').insert([
        {
          id: 1,
          name: "Taylor",
          age: 26,
          identity: "Gay",
          gender: "Cis Male",
          Im: "Out",
          description: "Hello! My name is Taylor I live in Denver Colorado with my Fiancé Brandon and our Dog Louis. We have been together for 2 years and getting married next fall! I grew up in a small town of 1,000 people in southern Utah. I came out 10 years ago when I was 16 years ago. Coming out in a small community was challenging but also very rewarding. The one thing I wish I had was someone to talk me thought the coming out process that had been through it themselves. That is why I am so glad to be a Mentor on Community so I can help people who don’t have the support like I did.",
          image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/22365629_10105601754580813_7197396316128962093_n.jpg?_nc_cat=0&oh=95401fc270846b9891300380ab3e030a&oe=5BCF951F"
      },
      {
          id: 2,
          name: "Lana",
          age: 24,
          identity: "Lesbian",
          gender: "Cis Female",
          Im: "Out",
          description: "Unfortunately for me, I was outed to my mom by a disgruntled ex. My mom wasn't thrilled at the moment and it took her some time to come around. I knew I eventually needed to tell my dad. I went to my parents one night and was talking with them. My mom asked me if I had anything to say to them. My response was, 'Oh, you mean that I'm gay?' My dad asked me a few questions and that was it. He later walked me to my car, gave me a hug, and said, 'Sweetheart, no matter what, you'll always be my little girl.' Ten years later, my parents are both very involved in my life and are helping my future wife and I plan our wedding this August in Indianapolis.",
          image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=214b5beac96f7d680a19b3836b28ccc3&auto=format&fit=crop&w=634&q=80"
      },
      {
          id: 3,
          name: "Nick",
          age: 30,
          identity: "Gay",
          gender: "Cis Male",
          Im: "Out",
          description: "“They always say, “it’s darkest before the dawn.” It’s so cliché, but it’s always darkest right before you come to a point of acceptance. It was the beginning of senior year in high school – I was either 16 or 17. [My decision to come out was inspired by] a lot of things. I had gone through basically a year of “what’s wrong with me?” I felt so depressed. I didn’t even feel like a living human being; I felt like an empty vessel, and I think a lot of gay people will say that right before you come to accept and share this part of yourself, you feel like you’re at your lowest point, and that’s what I felt.",
          image: "https://images.unsplash.com/photo-1522609946836-c85cba8eb943?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=917cb3c845bb6aaffa27be9efa07e147&auto=format&fit=crop&w=400&q=60"
      },
      {
          id: 4,
          name: "Holly",
          age: 29,
          identity: "Lesbian",
          gender: "Cis Female",
          Im: "Out",
          description: "Growing up in a strict Hispanic home where the word lesbian was never used was going to be tough to break it to the padres. During a family gathering with everyone there, I figured, what better time to break it to them? I knew that this was my moment. I sat them down and said, 'Look, are you proud of me?' and they said, 'Yes,' and I asked them if they were happy with me and they said, 'Yes,' and I said, 'Well, I am not keeping you in suspense anymore. I am a lesbian and nothing is going to change.' My mom started to cry but knowing she was in public, she tried to contain herself. Perfect, right ? My father had a statue face but he got up hugged me and said he loved me. It was no fairy tale, of course. I got some biblical lectures, but after that day, I didn't care what was said about me because I came out directly to them and that's all that mattered. Coming out will never be easy but just make sure you don't regret it because it will never be like the movies.",
          image: "https://images.unsplash.com/photo-1513712834987-81c201758592?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=68809b0603f5737e53ff8aaa3570aedd&auto=format&fit=crop&w=400&q=60"
      },
      {
          id: 5,
          name: "Laith",
          age: 26,
          gender: "Male",
          Im: "Transgender FTM",
          description: "I didn’t really know what transitioning was until I was 19, but I knew I was something different around the age of 5. At 17 I was outed for being a lesbian but I never really identified as lesbian. I hated it. Lesbian was a word that women identified with and because I never really identified with being a woman, I didn’t like the word. When I was 19 and I don’t know what I was looking for on YouTube but I came across a few videos of some trans guys who had started hormone therapy and I was very curious. I watched those videos for hours. I was like, “This is me!” And that was a daunting thought. Oh great, another thing that makes me different from everyone else.",
          image: "http://www1.pictures.zimbio.com/gi/Laith+Ashley+Point+Honors+Gala+Honors+Greg+421yHao60Stl.jpg"
      },
      {
          id: 6,
          name: "Aydian",
         age: 30,
          gender: "Male",
          Im: "Transgender FTM",
          description: " I’ve come out twice in my life. When I was 16, I came out as a lesbian to my mom, even though I knew probably since the age of 13. That was an interesting experience, being the only out lesbian in my entire high school. When I came out at 16, I was already dressing more traditionally masculine. As each year went by until I hit about 20 or 21 years old, I just got more and more masculine. I went from stealing a few items from my brothers to then shopping in the men’s section to then wearing boxers instead of women’s underwear, and no longer wearing bras and only wearing sports bras, and stuff like that. In February of 2009, when I was 21, I came out as transgender.",
          image: "https://pridelife.com/wp-content/uploads/2016/09/aydian-dowling-credit-to-instagram-alionsfear.jpg" 
      },
      {
          id: 7,
          name: "Jennifer Boylan",
         age: 60,
          gender: "Male",
          Im: "Transgender MTF",
          description: "For trans people, I am hoping that there is some hope in learning how my life, and the lives of the people I love have continued since transitioning.  I know so many people lose their families, lose connection to their children, and suffer in so many ways; I hear from those noble, maligned souls every day.  But people should know that there are other ways our stories can turn out.  In my own life, as a result of luck, and love, and the brilliance of the people around me, my experience as a parent-- as both father and mother-- have helped define me.  As Puig once wrote, This dream is short, but happy.'",
          image: "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_675,w_1200,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1493048438/articles/2012/06/20/from-he-to-she-jennifer-finney-boylan-s-how-i-write-interview/jennifer-finney-boylan-interview_qs98l9"
      },
      {
          id: 8,
          name: "Andreja Pejić",
          age: 23,
          gender: "Female",
          Im: "Transgender MTF",
          description: "I would like to to reach out to all young gender non-conforming youth out there: I know it's hard, I've been there, but remember it's your right to be accepted as what you identify with---you deserve the same respect as any other human being on this planet. As a transgender woman I hope to show that after transition (a life-saving process) one can be happy and successful in their new chapter without having to alienate their past. Most importantly differences should not equal divisions, let's all stand together in union. #betruebeyou ",
          image: "https://imgix.bustle.com/uploads/getty/2018/5/21/2ebb2480-5342-4301-aa84-cefe12be1f4a-getty-501501330.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70"
      
      }
      ])
    })
    .then(() => {
      return knex.raw("SELECT setval('mentors_id_seq', (SELECT MAX(id) FROM mentors))")
})
}
