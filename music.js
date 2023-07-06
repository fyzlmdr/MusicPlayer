class Music{
    constructor(title,singer,img,file){
        this.title=title;
        this.img=img;
        this.singer=singer;
        this.file=file;

    }

    getName(){

        return this.title+"-"+this.singer;
    }

}

const musicList=[
    new Music("Ta Uzak Yollardan","Nilüfer","1.jpeg","1.mp3"),
    new Music("Kusura Bakma","Sezen Aksu","1.jpeg","2.mp3"),
    new Music("Ask","Tarkan","1.jpeg","3.mp3"),
    
];