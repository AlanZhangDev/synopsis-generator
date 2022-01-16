import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function addSelectListener(id, callBack) 
{
  let x = document.getElementById(id)
  x.addEventListener("change", function() {
    callBack(x)
  });
}

let bookContent = {
  "Anna-Karenina": "Happy families are all alike; every unhappy family is unhappy in its own way. Everything was in confusion in the Oblonskys house. The wife had discovered that the husband was carrying on an intrigue with a French girl, who had been a governess in their family, and she had announced to her husband that she could not go on living in the same house with him. This position of affairs had now lasted three days, and not only the husband and wife themselves, but all the members of their family and household, were painfully conscious of it. Every person in the house felt that there was no sense in their living together, and that the stray people brought together by chance in any inn had more in common with one another than they, the members of the family and household of the Oblonskys. The wife did not leave her own room, the husband had not been at home for three days. The children ran wild all over the house; the English governess quarreled with the housekeeper, and wrote to a friend asking her to look out for a new situation for her; the man-cook had walked off the day before just at dinner time; the kitchen-maid, and the coachman had given warning.Three days after the quarrel, Prince Stepan Arkadyevitch Oblonsky—Stiva, as he was called in the fashionable world—woke up at his usual hour, that is, at eight o’clock in the morning, not in his wife’s bedroom, but on the leather-covered sofa in his study. He turned over his stout, well-cared-for person on the springy sofa, as though he would sink into a long sleep again; he vigorously embraced the pillow on the other side and buried his face in it; but all at once he jumped up, sat up on the sofa, and opened his eyes."
  , "Divine-Comedy": "IN the midway of this our mortal life, I found me in a gloomy wood, astray Gone from the path direct: and e'en to tell It were no easy task, how savage wild That forest, how robust and rough its growth, Which to remember only, my dismay Renews, in bitterness not far from death. Yet to discourse of what there good befell, All else will I relate discover'd there. How first I enter'd it I scarce can say, Such sleepy dullness in that instant weigh'd My senses down, when the true path I left, But when a mountain's foot I reach'd, where clos'd The valley, that had pierc'd my heart with dread, I look'd aloft, and saw his shoulders broad Already vested with that planet's beam, Who leads all wanderers safe through every way. Then was a little respite to the fear, That in my heart's recesses deep had lain, All of that night, so pitifully pass'd: And as a man, with difficult short breath, Forespent with toiling, 'scap'd from sea to shore, Turns to the perilous wide waste, and stands At gaze; e'en so my spirit, that yet fail'd Struggling with terror, turn'd to view the straits, That none hath pass'd and liv'd. My weary frame After short pause recomforted, again I journey'd on over that lonely steep"
  , "Dream-Red-Chamber": " Chen Shih-yin, in a vision, apprehends perception and spirituality. Chia Yü-ts'un, in the (windy and dusty) world, cherishes fond thoughts of a beautiful maiden. This is the opening section; this the first chapter. Subsequent to the visions of a dream which he had, on some previous occasion, experienced, the writer personally relates, he designedly concealed the true circumstances, and borrowed the attributes of perception and spirituality to relate this story of the Record of the Stone. With this purpose, he made use of such designations as Chen Shih-yin (truth under the garb of fiction) and the like. What are, however, the events recorded in this work? Who are the dramatis personae? Wearied with the drudgery experienced of late in the world, the author speaking for himself, goes on to explain, with the lack of success which attended every single concern, I suddenly bethought myself of the womankind of past ages. Passing one by one under a minute scrutiny, I felt that in action and in lore, one and all were far above me; that in spite of the majesty of my manliness, I could not, in point of fact, compare with these characters of the gentle sex. And my shame forsooth then knew no bounds; while regret, on the other hand, was of no avail, as there was not even a remote possibility of a day of remedy. On this very day it was that I became desirous to compile, in a connected form, for publication throughout the world, with a view to (universal) information, how that I bear inexorable and manifold retribution; inasmuch as what time, by the sustenance of the benevolence of Heaven, and the virtue of my ancestors, my apparel was rich and fine, and as what days my fare was savory and sumptuous, I disregarded the bounty of education and nurture of father and mother, and paid no heed to the virtue of precept and injunction of teachers and friends, with the result that I incurred the punishment, of failure recently in the least trifle, and the reckless waste of half my lifetime. There have been meanwhile, generation after generation, those in the inner chambers, the whole mass of whom could not, on any account, be, through my influence, allowed to fall into extinction, in order that I, unfilial as I have been, may have the means to screen my own shortcomings." 
  , "Frankenstein": "I am by birth a Genevese, and my family is one of the most distinguished of that republic. My ancestors had been for many years counsellors and syndics, and my father had filled several public situations with honour and reputation. He was respected by all who knew him for his integrity and indefatigable attention to public business. He passed his younger days perpetually occupied by the affairs of his country; a variety of circumstances had prevented his marrying early, nor was it until the decline of life that he became a husband and the father of a family. As the circumstances of his marriage illustrate his character, I cannot refrain from relating them. One of his most intimate friends was a merchant who, from a flourishing state, fell, through numerous mischances, into poverty. This man, whose name was Beaufort, was of a proud and unbending disposition and could not bear to live in poverty and oblivion in the same country where he had formerly been distinguished for his rank and magnificence. Having paid his debts, therefore, in the most honourable manner, he retreated with his daughter to the town of Lucerne, where he lived unknown and in wretchedness. My father loved Beaufort with the truest friendship and was deeply grieved by his retreat in these unfortunate circumstances. He bitterly deplored the false pride which led his friend to a conduct so little worthy of the affection that united them. He lost no time in endeavouring to seek him out, with the hope of persuading him to begin the world again through his credit and assistance."
};

document.getElementById("enter").addEventListener("click", function() {
  enterClick()
});

function enterClick() {
  let book1 = document.getElementById("book-1").value
  let book2 = document.getElementById("book-2").value
  let prompt = bookContent[book1] + bookContent[book2]
  console.log("Reqeusting...")
  openai(prompt)

  
}

function openai(prompt)
{
    let data = {
      "prompt": prompt, 
      "max_tokens": 100,
      "temperature": 0.7
    }
    fetch("https://api.openai.com/v1/engines/davinci/completions", {
      method: "POST",
      headers: {'Content-Type': 'application/json', "Authorization": "Bearer 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"
    }, 
      body: JSON.stringify(data)
    }).then(res => {
      res.json().then(json => {
        document.getElementById("output").innerText = json["choices"][0]["text"]
      })
    });
}