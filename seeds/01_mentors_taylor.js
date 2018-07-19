
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('mentors').del()
    .then(function () {
      // Inserts seed entries
      return knex('mentors').insert([
        {
          id: 1,
          name: "Jack",
          age: 26,
          identity: "Gay",
          gender: "Cis Male",
          Im: "Out",
          description: "“High school was the place I really came to terms with who I was as a person. I remember being confused for such a long time about who I was, especially when it came to my sexual orientation. I always knew I wasn’t like the rest of the straight boys at my school; I wasn’t attracted to women in the same way they were. I was, however attracted to men, but I didn’t think of it really in a very sexual way. I thought I was so interested in these guys because I wanted to be friends with them, or I wanted my body to look like theirs, or I wanted the same kind of haircut as them. I soon realized after those were not the only reasons I was thinking the way I was.",
          image: "https://images.unsplash.com/photo-1488371934083-edb7857977df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=79e516e5e50dfd4f8e0764fdfa5d5b1f&auto=format&fit=crop&w=500&q=60"
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
          description: "Growing up in a strict Hispanic home where the word lesbian was never used was going to be tough to break it to the padres. During a family gathering with everyone there, I figured, what better time to break it to them? I knew that this was my moment. I sat them down and said, 'Look, are you proud of me?' and they said, 'Yes,' and I asked them if they were happy with me and they said, 'Yes,' and I said, 'Well, I am not keeping you in suspense anymore. I am a lesbian and nothing is going to change.' My mom started to cry but knowing she was in public, she tried to contain herself. Perfect, right ? My father had a statue face but he got up hugged me and said he loved me. It was no fairy tale, of course. I got some biblical lectures, but after that day, I didn't care what was said about me because I came out directly to them and that's all that mattered.",
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
          name: "Jennifer",
         age: 30,
          gender: "",
          Im: "Transgender MTF",
          description: "For trans people, I am hoping that there is some hope in learning how my life, and the lives of the people I love have continued since transitioning.  I know so many people lose their families, lose connection to their children, and suffer in so many ways; I hear from those noble, maligned souls every day.  But people should know that there are other ways our stories can turn out.  In my own life, as a result of luck, and love, and the brilliance of the people around me, my experience as a parent-- as both father and mother-- have helped define me.  As Puig once wrote, This dream is short, but happy.'",
          image: "https://images.unsplash.com/photo-1518971428743-316d34219148?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=552624c9bfbac6016bf1ad5dd73bcfbe&auto=format&fit=crop&w=500&q=60"
      },
      {
          id: 8,
          name: "Andreja",
          age: 23,
          gender: "",
          Im: "Transgender MTF",
          description: "I would like to to reach out to all young gender non-conforming youth out there: I know it's hard, I've been there, but remember it's your right to be accepted as what you identify with---you deserve the same respect as any other human being on this planet. As a transgender woman I hope to show that after transition (a life-saving process) one can be happy and successful in their new chapter without having to alienate their past. Most importantly differences should not equal divisions, let's all stand together in union. #betruebeyou ",
          image: "https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ec08f945e158c5d018fec41a911e626&auto=format&fit=crop&w=500&q=60"
      
      }
      ])
    })
    .then(() => {
      return knex.raw("SELECT setval('mentors_id_seq', (SELECT MAX(id) FROM mentors))")
})
}
