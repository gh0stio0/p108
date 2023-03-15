function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/RRlQKgstf/model.json',modelready)
}
function modelready()
{
    classifier.classify(gotresults)
}
function gotresults(error,results){
  if(error){
    console.error(error);

  }
  else{
    console.log(results);
    r=Math.floor(Math.random()*255)+1;
    g=Math.floor(Math.random()*255)+1;
    b=Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML="I can hear "+results[0].label;
    document.getElementById("result_confidence").innerHTML="Accuracy is "+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color="rgb("+r+","+g+", "+b+")";
    document.getElementById("result_confidence").style.color="rgb("+r+","+g+", "+b+")";
    img = document.getElementById('cat_1');
     img1 = document.getElementById('dog_2');
      img2 = document.getElementById('bird_3');
      img3 = document.getElementById('pig_4');
       
        if (results[0].label == "meow") { img.src
        = 'cat.gif';
        img1.src
        = 'dog_2.png';
        img2.src
        = 'bird_3.png';
        img3.src
        = 'pig_4.png';
        } else if (results[0].label == "bark") { img.src
        = 'cat-png-17.png';
        img1.src
        = 'dog.gif';
        img2.src
        = 'bird.png';
        img3.src
        = 'pig.png';
        } else if (results[0].label == "chirp") { img.src
        = 'cat-png-17.png';
        img1.src
        = 'dog.png';
        img2.src
        = 'bird.gif';
        img3.src
        = 'pig.png';
        }else{ img.src
        = 'cat-png-17.png';
        img1.src
        = 'dog.png';
        img2.src
        = 'bird.png';
        img3.src
        = 'pig.gif';
        } }


}
