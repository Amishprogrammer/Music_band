// Doubly Linked List Node Constructor
class SongNode {
    constructor(songName, songURL) {
        this.songName = songName;
        this.songURL = songURL;
        this.next = null;
        this.prev = null;
    }
}

// Song dictionary
const songDictionary = {
    "100 Miles From Memphis": "https://github.com/Amishprogrammer/Music_band/raw/main/music/100%20Miles%20From%20Memphis.mp3",
    "1000 Hands": "https://github.com/Amishprogrammer/Music_band/raw/main/music/1000%20Hands.mp3",
    "22 (Taylor Swift)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/22%20(Taylor%20Swift).mp3",
    "A Drop In The Ocean": "https://github.com/Amishprogrammer/Music_band/raw/main/music/A%20Drop%20In%20The%20Ocean.mp3",
    "A Perfectly Good Heart (Taylor Swift)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/A%20Perfectly%20Good%20Heart%20(Taylor%20Swift).mp3",
    "A Place In This World (Taylor Swift)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/A%20Place%20In%20This%20World%20(Taylor%20Swift).mp3",
    "A World Alone (Red Cafe)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/A%20World%20Alone%20(Red%20Cafe).mp3",
    "A.I. (OneRepublic)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/A.I.%20(OneRepublic).mp3",
    "A.M. (One Direction)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/A.M.%20(One%20Direction).mp3",
    "AF1s": "https://github.com/Amishprogrammer/Music_band/raw/main/music/AF1s.mp3",
    "Aaj Dil Shayarana": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Aaj%20Dil%20Shayarana.mp3",
    "Aaya Na Tu": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Aaya%20Na%20Tu.mp3",
    "Abhi Mujh Mein Kahin": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Abhi%20Mujh%20Mein%20Kahin.mp3",
    "Act My Age (One Direction)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Act%20My%20Age%20(One%20Direction).mp3",
    "Adictiva": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Adictiva.mp3",
    "Ae Dil Hai Mushkil": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Ae%20Dil%20Hai%20Mushkil.mp3",
    "Affection": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Affection.mp3",
    "After The Afterparty": "https://github.com/Amishprogrammer/Music_band/raw/main/music/After%20The%20Afterparty.mp3",
    "Alarm": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Alarm.mp3",
    "All Falls Down": "https://github.com/Amishprogrammer/Music_band/raw/main/music/All%20Falls%20Down.mp3",
    "All In My Head (Fifth Harmony)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/All%20In%20My%20Head%20(Fifth%20Harmony).mp3",
    "All Night (BTS)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/All%20Night%20(BTS).mp3",
    "All Night (The Vamps)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/All%20Night%20(The%20Vamps).mp3",
    "All Of The Stars (Ed Sheeran)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/All%20Of%20The%20Stars%20(Ed%20Sheeran).mp3",
    "All The Lies": "https://github.com/Amishprogrammer/Music_band/raw/main/music/All%20The%20Lies.mp3",
    "All These Things (OneRepublic)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/All%20These%20Things%20(OneRepublic).mp3",
    "All Time Low Good Times": "https://github.com/Amishprogrammer/Music_band/raw/main/music/All%20Time%20Low%20Good%20Times.mp3",
    "All We Know (The Chainsmokers)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/All%20We%20Know%20(The%20Chainsmokers).mp3",
    "All You Had To Do Was Stay (Taylor Swift)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/All%20You%20Had%20To%20Do%20Was%20Stay%20(Taylor%20Swift).mp3",
    "Alone (Marshmello)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Alone%20(Marshmello).mp3",
    "Always Be Your Girl (Celine Dion)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Always%20Be%20Your%20Girl%20(Celine%20Dion).mp3",
    "Ambarsariya (WapWay)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Ambarsariya%20(WapWay).mp3",
    "Anaconda (Nicki Minaj)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Anaconda%20(Nicki%20Minaj).mp3",
    "Animals (Botnek Edit)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Animals%20(Botnek%20Edit).mp3",
    "Animals (Victorniglio)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Animals%20(Victorniglio).mp3",
    "Apna Time Aayega": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Apna%20Time%20Aayega.mp3",
    "Army (Ellie Goulding)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Army%20(Ellie%20Goulding).mp3",
    "Asim Azhar - Jo Tu Na Mila": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Asim%20Azhar%20-%20Jo%20Tu%20Na%20Mila.mp3",
    "Au Revoir (One Republic)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Au%20Revoir%20(One%20Republic).mp3",
    "BIBA (Marshmello x Pritam)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/BIBA%20(Marshmello%20x%20Pritam).mp3",
    "Baarish Lete Aana": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Baarish%20Lete%20Aana.mp3",
    "Baarishein": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Baarishein.mp3",
    "Baby (Justin Bieber Ft. Ludacris)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Baby%20(Justin%20Bieber%20Ft.%20Ludacris).mp3",
    "Baby Love": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Baby%20Love.mp3",
    "Bad Liar (Selena Gomez)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Bad%20Liar%20(Selena%20Gomez).mp3",
    "Bad Together (Dua Lipa)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Bad%20Together%20(Dua%20Lipa).mp3",
    "Badri Ki Dulhania": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Badri%20Ki%20Dulhania.mp3",
    "Bahara": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Bahara.mp3",
    "Balam Pichkari": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Balam%20Pichkari.mp3",
    "Banjaara": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Banjaara.mp3",
    "Batameez Dil": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Batameez%20Dil.mp3",
    "Battle Symphony": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Battle%20Symphony.mp3",
    "Bazzi - Beautiful feat. Camila": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Bazzi%20-%20Beautiful%20feat.%20Camila.mp3",
    "Be Intehaan": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Be%20Intehaan.mp3",
    "Be The One": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Be%20The%20One.mp3",
    "Beautiful (Bazzi ft. Camila Cabello )": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Beautiful%20(Bazzi%20ft.%20Camila%20Cabello%20).mp3",
    "Beautiful Life": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Beautiful%20Life.mp3",
    "Beautiful People": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Beautiful%20People.mp3",
    "Beauty And The Beast Song": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Beauty%20And%20The%20Beast%20Song.mp3",
    "Bed": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Bed.mp3",
    "Befikra": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Befikra.mp3",
    "Besharmi Ki Height": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Besharmi%20Ki%20Height.mp3",
    "Better": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Better.mp3",
    "Big Bad Wolf": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Big%20Bad%20Wolf.mp3",
    "Bin Tere": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Bin%20Tere.mp3",
    "Bittersweet (Ellie Goulding)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Bittersweet%20(Ellie%20Goulding).mp3",
    "Black Magic": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Black%20Magic.mp3",
    "Blank Space": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Blank%20Space.mp3",
    "Bol Do Na Zara": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Bol%20Do%20Na%20Zara.mp3",
    "Bolna": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Bolna.mp3",
    "Bom Diggy Diggy": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Bom%20Diggy%20Diggy.mp3",
    "Born To Race (OneRepublic)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Born%20To%20Race%20(OneRepublic).mp3",
    "Both of Us (Taylor Swift)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Both%20of%20Us%20(Taylor%20Swift).mp3",
    "Bottoms Up": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Bottoms%20Up.mp3",
    "Boy With Luv": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Boy%20With%20Luv.mp3",
    "Breathe (Backstreet Boys)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Breathe%20(Backstreet%20Boys).mp3",
    "Breathe (Taylor Swift)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Breathe%20(Taylor%20Swift).mp3",
    "Brother Like You": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Brother%20Like%20You.mp3",
    "Bruning Bridges (OneRepublic)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Bruning%20Bridges%20(OneRepublic).mp3",
    "Buddhu Sa Mann": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Buddhu%20Sa%20Mann.mp3",
    "Bulleya": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Bulleya.mp3",
    "Burn (Ellie Goulding)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Burn%20(Ellie%20Goulding).mp3",
    "Burn Gino Valentino Remix (Ellie Goulding ft Kid Ink)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Burn%20Gino%20Valentino%20Remix%20(Ellie%20Goulding%20ft%20Kid%20Ink).mp3",
    "Call It What You Want": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Call%20It%20What%20You%20Want.mp3",
    "Calma": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Calma.mp3",
    "Camila Cabello - Real Friends - MP3 320": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Camila%20Cabello%20-%20Real%20Friends%20-%20MP3%20320.mp3",
    "Carry Me Home": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Carry%20Me%20Home.mp3",
    "Cash Cash Digital Farm Animals": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Cash%20Cash%20Digital%20Farm%20Animals.mp3",
    "Cave In": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Cave%20In.mp3",
    "Chahun_Main_Ya_Naa_-_www": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Chahun_Main_Ya_Naa_-_www.mp3",
    "Chalte Chalte": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Chalte%20Chalte.mp3",
    "Channa Mereya": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Channa%20Mereya.mp3",
    "Charlie_Puth_-_River_ (www.music.luigykent.org)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Charlie_Puth_-_River_%20(www.music.luigykent.org).mp3",
    "Check This Out (Marshmello)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Check%20This%20Out%20(Marshmello).mp3",
    "Chelsea Dagger": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Chelsea%20Dagger.mp3",
    "Chhote Chhote Peg": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Chhote%20Chhote%20Peg.mp3",
    "Chlorine": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Chlorine.mp3",
    "Chunar": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Chunar.mp3",
    "Ciao Adios": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Ciao%20Adios.mp3",
    "Circles(DjPaji.Com)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Circles(DjPaji.Com).mp3",
    "Clandestino": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Clandestino.mp3",
    "Close To Me": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Close%20To%20Me.mp3",
    "Club Cant Handle Me (Florida)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Club%20Cant%20Handle%20Me%20(Florida).mp3",
    "Coca Cola": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Coca%20Cola.mp3",
    "Cold Showers (Chelsea Cutler)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Cold%20Showers%20(Chelsea%20Cutler).mp3",
    "Conversations In The Dark (John Legend)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Conversations%20In%20The%20Dark%20(John%20Legend).mp3",
    "Count on me (Bruno Mars)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Count%20on%20me%20(Bruno%20Mars).mp3",
    "Counting Stars (One Republic)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Counting%20Stars%20(One%20Republic).mp3",
    "Cradles": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Cradles.mp3",
    "Criminal": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Criminal.mp3",
    "Cry": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Cry.mp3",
    "D Se Dance": "https://github.com/Amishprogrammer/Music_band/raw/main/music/D%20Se%20Dance.mp3",
    "DNA (BTS)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/DNA%20(BTS).mp3",
    "Daayre": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Daayre.mp3",
    "Dance Basanti": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Dance%20Basanti.mp3",
    "Dance Without You (Ricky Luna)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Dance%20Without%20You%20(Ricky%20Luna).mp3",
    "Dancing With Our Hands Tied": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Dancing%20With%20Our%20Hands%20Tied.mp3",
    "Dancing": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Dancing.mp3",
    "Darkhaast": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Darkhaast.mp3",
    "Darkside": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Darkside.mp3",
    "Dekh Lena": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Dekh%20Lena.mp3",
    "Dekhte Dekhte": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Dekhte%20Dekhte.mp3",
    "Dhoom Dhaam": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Dhoom%20Dhaam.mp3",
    "Diamond Heart": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Diamond%20Heart.mp3",
    "Different World": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Different%20World.mp3",
    "Dil Cheez Tujhe Dedi": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Dil%20Cheez%20Tujhe%20Dedi.mp3",
    "Dil Diyan Gallan": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Dil%20Diyan%20Gallan.mp3",
    "Dil Mein Chhupa Loonga": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Dil%20Mein%20Chhupa%20Loonga.mp3",
    "Dil Mein Ho Tum": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Dil%20Mein%20Ho%20Tum.mp3",
    "Dil Meri Na Sune": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Dil%20Meri%20Na%20Sune.mp3",
    "Do It All For You": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Do%20It%20All%20For%20You.mp3",
    "Do You Love Me Still": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Do%20You%20Love%20Me%20Still.mp3",
    "Don't Tell Me": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Don't%20Tell%20Me.mp3",
    "Done For Me (ft. Kehlani)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Done%20For%20Me%20(ft.%20Kehlani).mp3",
    "Dont Leave Me Alone (David Guetta ft. Anne-Marie)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Dont%20Leave%20Me%20Alone%20(David%20Guetta%20ft.%20Anne-Marie).mp3",
    "Dont Look Down (Martin Garrix)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Dont%20Look%20Down%20(Martin%20Garrix).mp3",
    "Dream About the Ocean": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Dream%20About%20the%20Ocean.mp3",
    "Dream Awake": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Dream%20Awake.mp3",
    "Dream Glow (BTS)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Dream%20Glow%20(BTS).mp3",
    "Dress": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Dress.mp3",
    "Duniyaa": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Duniyaa.mp3",
    "Earth To Move (Maroon 5)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Earth%20To%20Move%20(Maroon%205).mp3",
    "Eastside": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Eastside.mp3",
    "Echame La Culpa": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Echame%20La%20Culpa.mp3",
    "Eighteen (One Direction)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Eighteen%20(One%20Direction).mp3",
    "Ek Ladki Ko Dekha (Acoustic) Sanam": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Ek%20Ladki%20Ko%20Dekha%20(Acoustic)%20Sanam.mp3",
    "Ek Toh Kum Zindagani": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Ek%20Toh%20Kum%20Zindagani.mp3",
    "Eminem-River": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Eminem-River.mp3",
    "Enchanted (Taylor Swift)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Enchanted%20(Taylor%20Swift).mp3",
    "Enchanted 9": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Enchanted%209.mp3",
    "End Of The Day (One Direction)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/End%20Of%20The%20Day%20(One%20Direction).mp3",
    "Entertainer": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Entertainer.mp3",
    "Everybody Hates Me": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Everybody%20Hates%20Me.mp3",
    "Everything Has Changed": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Everything%20Has%20Changed.mp3",
    "Everything": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Everything.mp3",
    "FRIENDS (Marshmello %26 Anne-Marie)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/FRIENDS%20(Marshmello%20%26%20Anne-Marie).mp3",
    "Fearless": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Fearless.mp3",
    "Feel Again (OneRepublic)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Feel%20Again%20(OneRepublic).mp3",
    "Finally Found You (Enrique Iglesias)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Finally%20Found%20You%20(Enrique%20Iglesias).mp3",
    "Firestone (Kygo ft. Conrad Sewell)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Firestone%20(Kygo%20ft.%20Conrad%20Sewell).mp3",
    "Firework (Katy Perry)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Firework%20(Katy%20Perry).mp3",
    "First Time (Kygo and Ellie Goulding)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/First%20Time%20(Kygo%20and%20Ellie%20Goulding).mp3",
    "Forever (Martin Garrix %26 Matisse %26 Sadko)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Forever%20(Martin%20Garrix%20%26%20Matisse%20%26%20Sadko).mp3",
    "Galliyan": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Galliyan.mp3",
    "Galti Se Mistake": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Galti%20Se%20Mistake.mp3",
    "Gazab Ka Hai Yeh Din": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Gazab%20Ka%20Hai%20Yeh%20Din.mp3",
    "Gerua": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Gerua.mp3",
    "Ghagra": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Ghagra.mp3",
    "Ghungroo": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Ghungroo.mp3",
    "Gilehriyaan": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Gilehriyaan.mp3",
    "Girl I Need You": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Girl%20I%20Need%20You.mp3",
    "Girl in a Bookstore": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Girl%20in%20a%20Bookstore.mp3",
    "Girls Like You": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Girls%20Like%20You.mp3",
    "God Is A Woman (Ariana Grande)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/God%20Is%20A%20Woman%20(Ariana%20Grande).mp3",
    "Good Cry": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Good%20Cry.mp3",
    "Got Your Back": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Got%20Your%20Back.mp3",
    "Graduation (Juice WRLD %26 benny blanco)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Graduation%20(Juice%20WRLD%20%26%20benny%20blanco).mp3",
    "Haaye Oye": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Haaye%20Oye.mp3",
    "Hair (Little Mix)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Hair%20(Little%20Mix).mp3",
    "Hamdard": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Hamdard.mp3",
    "Happier (Marshmello)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Happier%20(Marshmello).mp3",
    "Happy Now": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Happy%20Now.mp3",
    "Haseeno Ka Deewana": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Haseeno%20Ka%20Deewana.mp3",
    "Hate Me (Ellie Goulding And Juice WRLD)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Hate%20Me%20(Ellie%20Goulding%20And%20Juice%20WRLD).mp3",
    "Hawayein": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Hawayein.mp3",
    "Hayley Williams Of Paramore Airplanes": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Hayley%20Williams%20Of%20Paramore%20Airplanes.mp3",
    "Heart Attack (Enrique Iglesias)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Heart%20Attack%20(Enrique%20Iglesias).mp3",
    "Heavy": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Heavy.mp3",
    "Hide The Wine": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Hide%20The%20Wine.mp3",
    "High On Life": "https://github.com/Amishprogrammer/Music_band/raw/main/music/High%20On%20Life.mp3",
    "Hold On": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Hold%20On.mp3",
    "Hold it Against Me": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Hold%20it%20Against%20Me.mp3",
    "Hollow": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Hollow.mp3",
    "Home": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Home.mp3",
    "Hope": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Hope.mp3",
    "House on the moon": "https://github.com/Amishprogrammer/Music_band/raw/main/music/House%20on%20the%20moon.mp3",
    "Hua Hain Aaj Pehli Baar": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Hua%20Hain%20Aaj%20Pehli%20Baar.mp3",
    "Humsafar": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Humsafar.mp3",
    "Hungama Ho Gaya": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Hungama%20Ho%20Gaya.mp3",
    "I Almost Do (Taylor Swift)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/I%20Almost%20Do%20(Taylor%20Swift).mp3",
    "I Need Your Love (Calvin Harris)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/I%20Need%20Your%20Love%20(Calvin%20Harris).mp3",
    "I Really Wanna (Luna Snow)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/I%20Really%20Wanna%20(Luna%20Snow).mp3",
    "I don't care (ED Sheeran)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/I%20don't%20care%20(ED%20Sheeran).mp3",
    "I'll Be There (Jess Glynne)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/I'll%20Be%20There%20(Jess%20Glynne).mp3",
    "I'll Still Kill": "https://github.com/Amishprogrammer/Music_band/raw/main/music/I'll%20Still%20Kill.mp3",
    "I'm Falling For You": "https://github.com/Amishprogrammer/Music_band/raw/main/music/I'm%20Falling%20For%20You.mp3",
    "If I Lose Myself": "https://github.com/Amishprogrammer/Music_band/raw/main/music/If%20I%20Lose%20Myself.mp3",
    "If This Was A Movie (Taylor Swift)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/If%20This%20Was%20A%20Movie%20(Taylor%20Swift).mp3",
    "If You Hold My Hand": "https://github.com/Amishprogrammer/Music_band/raw/main/music/If%20You%20Hold%20My%20Hand.mp3",
    "Ignite": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Ignite.mp3",
    "Iktara": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Iktara.mp3",
    "Im A Freak (Enrique Iglesias  Ft.Pitbull)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Im%20A%20Freak%20(Enrique%20Iglesias%20%20Ft.Pitbull).mp3",
    "Imagination": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Imagination.mp3",
    "Intentions (Justin Bieber ft. Quavo)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Intentions%20(Justin%20Bieber%20ft.%20Quavo).mp3",
    "Intentions (feat. Quavo)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Intentions%20(feat.%20Quavo).mp3",
    "Intro (Khalid)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Intro%20(Khalid).mp3",
    "Irresistible": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Irresistible.mp3",
    "Is Your Love Enough": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Is%20Your%20Love%20Enough.mp3",
    "Ishaara": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Ishaara.mp3",
    "Ishaqzaade": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Ishaqzaade.mp3",
    "Iski Uski": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Iski%20Uski.mp3",
    "Issaq Tera - Duet": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Issaq%20Tera%20-%20Duet.mp3",
    "Issaq Tera - Male": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Issaq%20Tera%20-%20Male.mp3",
    "It Will Rain (Bruno Mars)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/It%20Will%20Rain%20(Bruno%20Mars).mp3",
    "It's Time To Go": "https://github.com/Amishprogrammer/Music_band/raw/main/music/It's%20Time%20To%20Go.mp3",
    "It's You": "https://github.com/Amishprogrammer/Music_band/raw/main/music/It's%20You.mp3",
    "Itni Si Baat": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Itni%20Si%20Baat.mp3",
    "Jaan Nisaar (Arijit)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Jaan%20Nisaar%20(Arijit).mp3",
    "Jab Tak": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Jab%20Tak.mp3",
    "Jabra Fan": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Jabra%20Fan.mp3",
    "Jadoo Ki Jhappi": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Jadoo%20Ki%20Jhappi.mp3",
    "Jag Ghoomeya": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Jag%20Ghoomeya.mp3",
    "Jai Jai Shivshankar": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Jai%20Jai%20Shivshankar.mp3",
    "Jaise Mera Tu": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Jaise%20Mera%20Tu.mp3",
    "Janam Janam": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Janam%20Janam.mp3",
    "Janib (Duet Version)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Janib%20(Duet%20Version).mp3",
    "Jeena Jeena": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Jeena%20Jeena.mp3",
    "Judaai": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Judaai.mp3",
    "Jumme Ki Raat": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Jumme%20Ki%20Raat.mp3",
    "Jump (Flo Rida)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Jump%20(Flo%20Rida).mp3",
    "Just the Way You Are (Bruno Mars)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Just%20the%20Way%20You%20Are%20(Bruno%20Mars).mp3",
    "Kabira (Arjit Singh)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Kabira%20(Arjit%20Singh).mp3",
    "Kabira (Rekha)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Kabira%20(Rekha).mp3",
    "Kaise Hua": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Kaise%20Hua.mp3",
    "Kar Gayi Chull": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Kar%20Gayi%20Chull.mp3",
    "Kashmir Main Tu Kanyakumari": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Kashmir%20Main%20Tu%20Kanyakumari.mp3",
    "Kaun Nachdi": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Kaun%20Nachdi.mp3",
    "Kaun Tujhe": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Kaun%20Tujhe.mp3",
    "Kehte Hain Khuda Ne": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Kehte%20Hain%20Khuda%20Ne.mp3",
    "Kingdom (Ellie Goulding)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Kingdom%20(Ellie%20Goulding).mp3",
    "Kisi Se Pyar Ho Jaye": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Kisi%20Se%20Pyar%20Ho%20Jaye.mp3",
    "Kream": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Kream.mp3",
    "Kuch Din": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Kuch%20Din.mp3",
    "L.U.V.": "https://github.com/Amishprogrammer/Music_band/raw/main/music/L.U.V..mp3",
    "Lag Ja Gale": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Lag%20Ja%20Gale.mp3",
    "Lag Jaa Gale (Sadhana%2C Lata Mangeshkar)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Lag%20Jaa%20Gale%20(Sadhana%2C%20Lata%20Mangeshkar).mp3",
    "Lagdi Hai Thaai": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Lagdi%20Hai%20Thaai.mp3",
    "Laila": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Laila.mp3",
    "Lat Lag Gayee": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Lat%20Lag%20Gayee.mp3",
    "Legends Never Die (Eminem)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Legends%20Never%20Die%20(Eminem).mp3",
    "Legends Never Die": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Legends%20Never%20Die.mp3",
    "Leja Re": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Leja%20Re.mp3",
    "Let Her Go": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Let%20Her%20Go.mp3",
    "Let Me Be Your Lover (Enrique Iglesias Ft.Pitbull)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Let%20Me%20Be%20Your%20Lover%20(Enrique%20Iglesias%20Ft.Pitbull).mp3",
    "Let Me": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Let%20Me.mp3",
    "Let You Be Right": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Let%20You%20Be%20Right.mp3",
    "Let You Love Me": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Let%20You%20Love%20Me.mp3",
    "Lets Get Ill": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Lets%20Get%20Ill.mp3",
    "Lets Nacho": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Lets%20Nacho.mp3",
    "Life In Color (OneRepublic)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Life%20In%20Color%20(OneRepublic).mp3",
    "Lily": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Lily.mp3",
    "Little Things": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Little%20Things.mp3",
    "Livin the Life (Afrojack)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Livin%20the%20Life%20(Afrojack).mp3",
    "Location (Khalid)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Location%20(Khalid).mp3",
    "Locked Out Of Heaven": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Locked%20Out%20Of%20Heaven.mp3",
    "Logic_Marshmello_Everyday": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Logic_Marshmello_Everyday.mp3",
    "Losing You": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Losing%20You.mp3",
    "Lost Control": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Lost%20Control.mp3",
    "Lost In Japan Original Remix": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Lost%20In%20Japan%20Original%20Remix.mp3",
    "Lost In Japan": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Lost%20In%20Japan.mp3",
    "Louder Than A Drum": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Louder%20Than%20A%20Drum.mp3",
    "Love Somebody": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Love%20Somebody.mp3",
    "Love Story": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Love%20Story.mp3",
    "Love Will Take You": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Love%20Will%20Take%20You.mp3",
    "MIA": "https://github.com/Amishprogrammer/Music_band/raw/main/music/MIA.mp3",
    "Machine": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Machine.mp3",
    "Magenta Riddim": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Magenta%20Riddim.mp3",
    "Magic": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Magic.mp3",
    "Main Hoon Deewana Tera": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Main%20Hoon%20Deewana%20Tera.mp3",
    "Main Kaun Hoon": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Main%20Kaun%20Hoon.mp3",
    "Main Kya Karoon": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Main%20Kya%20Karoon.mp3",
    "Main Rahoon Ya Na Rahoon": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Main%20Rahoon%20Ya%20Na%20Rahoon.mp3",
    "Main Rang Sharbaton Ka": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Main%20Rang%20Sharbaton%20Ka.mp3",
    "Main Tera Boyfriend": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Main%20Tera%20Boyfriend.mp3",
    "Manwa Laage": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Manwa%20Laage.mp3",
    "Mast Magan": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Mast%20Magan.mp3",
    "Meant To Be (Ananya Birla)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Meant%20To%20Be%20(Ananya%20Birla).mp3",
    "Memories (NATIIVE)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Memories%20(NATIIVE).mp3",
    "Mere Sohneya": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Mere%20Sohneya.mp3",
    "Millionaire": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Millionaire.mp3",
    "Milo Na Tum": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Milo%20Na%20Tum.mp3",
    "Mine (Taylor Swift)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Mine%20(Taylor%20Swift).mp3",
    "Minnale": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Minnale.mp3",
    "Mitti Di Khushboo": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Mitti%20Di%20Khushboo.mp3",
    "Moh Moh Ke Dhaage": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Moh%20Moh%20Ke%20Dhaage.mp3",
    "Moonlight": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Moonlight.mp3",
    "More Than You Know": "https://github.com/Amishprogrammer/Music_band/raw/main/music/More%20Than%20You%20Know.mp3",
    "Move To Miami": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Move%20To%20Miami.mp3",
    "Moving On (Marshmello)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Moving%20On%20(Marshmello).mp3",
    "Mujhko Barsaat Bana Lo": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Mujhko%20Barsaat%20Bana%20Lo.mp3",
    "Mungda": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Mungda.mp3",
    "Muskurane": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Muskurane.mp3",
    "My Heart Will Go On (Love Theme From Titanic)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/My%20Heart%20Will%20Go%20On%20(Love%20Theme%20From%20Titanic).mp3",
    "My Kind": "https://github.com/Amishprogrammer/Music_band/raw/main/music/My%20Kind.mp3",
    "Nachdi Phira": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Nachdi%20Phira.mp3",
    "Nai Lagda": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Nai%20Lagda.mp3",
    "Naino Ki Jo Baat": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Naino%20Ki%20Jo%20Baat.mp3",
    "Naked": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Naked.mp3",
    "Natural (Imagine Dragons)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Natural%20(Imagine%20Dragons).mp3",
    "Nazm Nazm (Ayushmann Khurrana Version)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Nazm%20Nazm%20(Ayushmann%20Khurrana%20Version).mp3",
    "Never Grow Up (Taylor Swift)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Never%20Grow%20Up%20(Taylor%20Swift).mp3",
    "Never Say Never": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Never%20Say%20Never.mp3",
    "Nice Guys": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Nice%20Guys.mp3",
    "No Brainer": "https://github.com/Amishprogrammer/Music_band/raw/main/music/No%20Brainer.mp3",
    "No Excuses": "https://github.com/Amishprogrammer/Music_band/raw/main/music/No%20Excuses.mp3",
    "No Love (EminemFt. Lil Wayne)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/No%20Love%20(EminemFt.%20Lil%20Wayne).mp3",
    "O Saathi": "https://github.com/Amishprogrammer/Music_band/raw/main/music/O%20Saathi.mp3",
    "OUTSIDE (Calvin Harris Ft. Ellie)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/OUTSIDE%20(Calvin%20Harris%20Ft.%20Ellie).mp3",
    "Odhani": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Odhani.mp3",
    "Oh God (dj dione)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Oh%20God%20(dj%20dione).mp3",
    "Oh Love (Taylor Swift)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Oh%20Love%20(Taylor%20Swift).mp3",
    "Only A Woman (Enrique Iglesias)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Only%20A%20Woman%20(Enrique%20Iglesias).mp3",
    "Oops (Martin Garrix)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Oops%20(Martin%20Garrix).mp3",
    "Ours (Taylor Swift)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Ours%20(Taylor%20Swift).mp3",
    "Oye Oye": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Oye%20Oye.mp3",
    "Piya O Re Piya": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Piya%20O%20Re%20Piya.mp3",
    "Pizza": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Pizza.mp3",
    "Please": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Please.mp3",
    "Poison": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Poison.mp3",
    "Premika": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Premika.mp3",
    "Project Dreams": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Project%20Dreams.mp3",
    "Proxy": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Proxy.mp3",
    "Psycho Saiyaan": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Psycho%20Saiyaan.mp3",
    "Pyar Ho": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Pyar%20Ho.mp3",
    "Qaafirana": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Qaafirana.mp3",
    "Queen": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Queen.mp3",
    "Raat Bhar": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Raat%20Bhar.mp3",
    "Rabba Main Toh Mar Gaya Oye": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Rabba%20Main%20Toh%20Mar%20Gaya%20Oye.mp3",
    "Radha - Jab Harry Met Sejal": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Radha%20-%20Jab%20Harry%20Met%20Sejal.mp3",
    "Radha - Student of the year": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Radha%20-%20Student%20of%20the%20year.mp3",
    "Rainbow": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Rainbow.mp3",
    "Right Now": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Right%20Now.mp3",
    "Rockabye": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Rockabye.mp3",
    "Rockstar (Post Malone)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Rockstar%20(Post%20Malone).mp3",
    "Routine": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Routine.mp3",
    "Run D World": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Run%20D%20World.mp3",
    "SOUTH OF THE BORDER (ED SHEERAN)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/SOUTH%20OF%20THE%20BORDER%20(ED%20SHEERAN).mp3",
    "Sab Tera": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Sab%20Tera.mp3",
    "Sad Beautiful Tragic (Taylor Swift)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Sad%20Beautiful%20Tragic%20(Taylor%20Swift).mp3",
    "Sadka Hua": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Sadka%20Hua.mp3",
    "Samjhawan": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Samjhawan.mp3",
    "Sapna Jahan": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Sapna%20Jahan.mp3",
    "Sawarne Lage": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Sawarne%20Lage.mp3",
    "Say You Won't Let Go": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Say%20You%20Won't%20Let%20Go.mp3",
    "See God Damn Youre Beautiful": "https://github.com/Amishprogrammer/Music_band/raw/main/music/See%20God%20Damn%20Youre%20Beautiful.mp3",
    "Senorita (ZNMD)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Senorita%20(ZNMD).mp3",
    "Seventeen (Avril Lavigne)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Seventeen%20(Avril%20Lavigne).mp3",
    "Shallow": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Shallow.mp3",
    "Shape Of You (Ed Sheeran)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Shape%20Of%20You%20(Ed%20Sheeran).mp3",
    "She Move It Like": "https://github.com/Amishprogrammer/Music_band/raw/main/music/She%20Move%20It%20Like.mp3",
    "She's Not Afraid": "https://github.com/Amishprogrammer/Music_band/raw/main/music/She's%20Not%20Afraid.mp3",
    "Should've Known Better": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Should've%20Known%20Better.mp3",
    "Side To Side (Ariana Grande feat. Nicki Minaj)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Side%20To%20Side%20(Ariana%20Grande%20feat.%20Nicki%20Minaj).mp3",
    "Silence": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Silence.mp3",
    "Sing Me To Sleep": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Sing%20Me%20To%20Sleep.mp3",
    "Sixteen (Chelsea Cutler)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Sixteen%20(Chelsea%20Cutler).mp3",
    "Sixteen (Ellie Goulding)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Sixteen%20(Ellie%20Goulding).mp3",
    "Sky": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Sky.mp3",
    "Slow Dance": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Slow%20Dance.mp3",
    "Smile (Avril Lavigne)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Smile%20(Avril%20Lavigne).mp3",
    "Smoke Shisha Play Fifa": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Smoke%20Shisha%20Play%20Fifa.mp3",
    "Snow": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Snow.mp3",
    "So Goodbye": "https://github.com/Amishprogrammer/Music_band/raw/main/music/So%20Goodbye.mp3",
    "Soch Na Sake": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Soch%20Na%20Sake.mp3",
    "Socha Hai": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Socha%20Hai.mp3",
    "Solo": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Solo.mp3",
    "Something I Need (OneRepublic)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Something%20I%20Need%20(OneRepublic).mp3",
    "Something In Common": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Something%20In%20Common.mp3",
    "Somethings Gotta Give (OneRepublic)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Somethings%20Gotta%20Give%20(OneRepublic).mp3",
    "Sometimes": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Sometimes.mp3",
    "Sooraj Dooba Hain": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Sooraj%20Dooba%20Hain.mp3",
    "Sour Diesel": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Sour%20Diesel.mp3",
    "Space Between": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Space%20Between.mp3",
    "Speak Now (Taylor Swift)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Speak%20Now%20(Taylor%20Swift).mp3",
    "Spotless": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Spotless.mp3",
    "Stand By Me": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Stand%20By%20Me.mp3",
    "Starboy (feat. Daft Punk)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Starboy%20(feat.%20Daft%20Punk).mp3",
    "Stars": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Stars.mp3",
    "State Of Grace (Taylor_Swift)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/State%20Of%20Grace%20(Taylor_Swift).mp3",
    "Stay Stay Stay (Taylor Swift)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Stay%20Stay%20Stay%20(Taylor%20Swift).mp3",
    "Stole The Show (Kygo)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Stole%20The%20Show%20(Kygo).mp3",
    "Street Livin": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Street%20Livin.mp3",
    "Subhanallah": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Subhanallah.mp3",
    "Suit Suit Karda": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Suit%20Suit%20Karda.mp3",
    "Sukoon Mila": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Sukoon%20Mila.mp3",
    "Summer Love": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Summer%20Love.mp3",
    "Sun Saathiya": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Sun%20Saathiya.mp3",
    "Sunflower": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Sunflower.mp3",
    "Sunn Raha Hai": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Sunn%20Raha%20Hai.mp3",
    "Superhero": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Superhero.mp3",
    "Superlove": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Superlove.mp3",
    "Superman (Taylor Swift)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Superman%20(Taylor%20Swift).mp3",
    "Superstar (The Carpenters)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Superstar%20(The%20Carpenters).mp3",
    "Supplies": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Supplies.mp3",
    "Sweetener": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Sweetener.mp3",
    "Sweety Tera Drama": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Sweety%20Tera%20Drama.mp3",
    "Symphony Zara Larsson": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Symphony%20Zara%20Larsson.mp3",
    "Taarefon Se": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Taarefon%20Se.mp3",
    "Take Me": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Take%20Me.mp3",
    "Take Your Shirt Off": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Take%20Your%20Shirt%20Off.mp3",
    "Tamma Tamma Again": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tamma%20Tamma%20Again.mp3",
    "Tera Ban Jaunga": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tera%20Ban%20Jaunga.mp3",
    "Tera Chehra": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tera%20Chehra.mp3",
    "Tera Fitoor": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tera%20Fitoor.mp3",
    "Tera Ghata": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tera%20Ghata.mp3",
    "Tera Hone Laga Hoon %5BAjab Prem Ki Ghazab Kahani%5D": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tera%20Hone%20Laga%20Hoon%20%5BAjab%20Prem%20Ki%20Ghazab%20Kahani%5D.mp3",
    "Tera Hua": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tera%20Hua.mp3",
    "Tera Rastaa Chhodoon Na": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tera%20Rastaa%20Chhodoon%20Na.mp3",
    "Tera Zikr": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tera%20Zikr.mp3",
    "Tere Bin": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tere%20Bin.mp3",
    "Tere Liye": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tere%20Liye.mp3",
    "Tere Mere": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tere%20Mere.mp3",
    "Tere Sang Yaara": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tere%20Sang%20Yaara.mp3",
    "Teri Jhuki Nazar": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Teri%20Jhuki%20Nazar.mp3",
    "Teri Mitti (Female Version)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Teri%20Mitti%20(Female%20Version).mp3",
    "Teri Ore": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Teri%20Ore.mp3",
    "The Lucky One (Taylor Swift)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/The%20Lucky%20One%20(Taylor%20Swift).mp3",
    "The Story Of Us (Taylor Swift)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/The%20Story%20Of%20Us%20(Taylor%20Swift).mp3",
    "The Way I Am": "https://github.com/Amishprogrammer/Music_band/raw/main/music/The%20Way%20I%20Am.mp3",
    "There Goes My Baby (Enrique Iglesias Ft.Flo Rida)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/There%20Goes%20My%20Baby%20(Enrique%20Iglesias%20Ft.Flo%20Rida).mp3",
    "There You Are": "https://github.com/Amishprogrammer/Music_band/raw/main/music/There%20You%20Are.mp3",
    "Thinking Out Loud (Ed Sheeran)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Thinking%20Out%20Loud%20(Ed%20Sheeran).mp3",
    "This Feeling": "https://github.com/Amishprogrammer/Music_band/raw/main/music/This%20Feeling.mp3",
    "This Girl (Laza Morgan )": "https://github.com/Amishprogrammer/Music_band/raw/main/music/This%20Girl%20(Laza%20Morgan%20).mp3",
    "Thunderclouds": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Thunderclouds.mp3",
    "Tilted Towers": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tilted%20Towers.mp3",
    "Tired (Featuring Gavin James)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tired%20(Featuring%20Gavin%20James).mp3",
    "Tired": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tired.mp3",
    "Together": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Together.mp3",
    "Tongue Tied (Marshmello x YUNGBLUD x blackbear)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tongue%20Tied%20(Marshmello%20x%20YUNGBLUD%20x%20blackbear).mp3",
    "Tonight(Im Lovin You) (Enrique Iglesias )": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tonight(Im%20Lovin%20You)%20(Enrique%20Iglesias%20).mp3",
    "Too Much": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Too%20Much.mp3",
    "Tootey Khaab": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tootey%20Khaab.mp3",
    "Treacherous (Taylor Swift)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Treacherous%20(Taylor%20Swift).mp3",
    "Tremor (Martin_Garrix)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tremor%20(Martin_Garrix).mp3",
    "Trigger": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Trigger.mp3",
    "Tu Chale": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tu%20Chale.mp3",
    "Tu Hi Hai": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tu%20Hi%20Hai.mp3",
    "Tu Jaane Na %5BAjab Prem Ki Ghazab Kahani%5D": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tu%20Jaane%20Na%20%5BAjab%20Prem%20Ki%20Ghazab%20Kahani%5D.mp3",
    "Tu Jo Mila": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tu%20Jo%20Mila.mp3",
    "Tu Meri": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tu%20Meri.mp3",
    "Tu Mohabbat Hein": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tu%20Mohabbat%20Hein.mp3",
    "Tujhe Kitna Chahne Lage": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tujhe%20Kitna%20Chahne%20Lage.mp3",
    "Tukur Tukur": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tukur%20Tukur.mp3",
    "Tum Hi Aana": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tum%20Hi%20Aana.mp3",
    "Tum Mile": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tum%20Mile.mp3",
    "Tum Saath Ho": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tum%20Saath%20Ho.mp3",
    "Tumse Hi": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Tumse%20Hi.mp3",
    "Twenty One Guns 21": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Twenty%20One%20Guns%2021.mp3",
    "Vaaste": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Vaaste.mp3",
    "Ve Maahi": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Ve%20Maahi.mp3",
    "Virus": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Virus.mp3",
    "Voicemail": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Voicemail.mp3",
    "Wajah Tum Ho": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Wajah%20Tum%20Ho.mp3",
    "Waka Waka (Shakira)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Waka%20Waka%20(Shakira).mp3",
    "Waving Goodbye": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Waving%20Goodbye.mp3",
    "We Are Never Ever Getting Back Together (Taylor Swift)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/We%20Are%20Never%20Ever%20Getting%20Back%20Together%20(Taylor%20Swift).mp3",
    "We don't talk anymore (BTS Charlie Puth)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/We%20don't%20talk%20anymore%20(BTS%20Charlie%20Puth).mp3",
    "Welcome to the Party (Diplo)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Welcome%20to%20the%20Party%20(Diplo).mp3",
    "Welcome": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Welcome.mp3",
    "What Lovers Do (Maroon 5)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/What%20Lovers%20Do%20(Maroon%205).mp3",
    "What Lovers Do": "https://github.com/Amishprogrammer/Music_band/raw/main/music/What%20Lovers%20Do.mp3",
    "When I Grow Up - NF": "https://github.com/Amishprogrammer/Music_band/raw/main/music/When%20I%20Grow%20Up%20-%20NF.mp3",
    "Who Am I to Stand in Your Way": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Who%20Am%20I%20to%20Stand%20in%20Your%20Way.mp3",
    "Who": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Who.mp3",
    "Wiee (Martin Garrix)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Wiee%20(Martin%20Garrix).mp3",
    "Without Me (Halsey)": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Without%20Me%20(Halsey).mp3",
    "Work In The Middle": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Work%20In%20The%20Middle.mp3",
    "Write On Me": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Write%20On%20Me.mp3",
    "Young Dumb %26 Broke": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Young%20Dumb%20%26%20Broke.mp3",
    "Young Girls": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Young%20Girls.mp3",
    "Young and Free": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Young%20and%20Free.mp3",
    "Your Song": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Your%20Song.mp3",
    "Zaalima": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Zaalima.mp3",
    "Zaroorat": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Zaroorat.mp3",
    "Zehnaseeb": "https://github.com/Amishprogrammer/Music_band/raw/main/music/Zehnaseeb.mp3",
    "ellie-goulding-explosions": "https://github.com/Amishprogrammer/Music_band/raw/main/music/ellie-goulding-explosions.mp3"
};

// Doubly Linked List (Queue)
class SongQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.current = null;
    }

    addSong(songName, songURL) {
        const newNode = new SongNode(songName, songURL);
        if (!this.head) {
            this.head = this.tail = newNode;
            this.current = this.head;
            playSong(this.head); // Automatically play the first song added to the queue
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        updateQueueDisplay();
    }

    removeSong(songName) {
        let node = this.head;

        while (node) {
            if (node.songName === songName) {
                if (node.next) node.next.prev = node.prev;
                if (node.prev) node.prev.next = node.next;

                if (node === this.head) this.head = node.next;
                if (node === this.tail) this.tail = node.prev;

                if (node === this.current) {
                    this.current = node.next || this.head;
                }
                break;
            }
            node = node.next;
        }
        updateQueueDisplay();
    }

    getQueueArray() {
        const queue = [];
        let current = this.head;
        while (current) {
            queue.push({ songName: current.songName, songURL: current.songURL });
            current = current.next;
        }
        return queue;
    }

    loadQueueFromArray(queueArray) {
        this.head = this.tail = this.current = null;
        queueArray.forEach(song => this.addSong(song.songName, song.songURL));
    }

    getNextSong() {
        if (this.current && this.current.next) {
            this.current = this.current.next;
            return this.current;
        } else {
            this.current = this.head; // Restart from the beginning
            return this.current;
        }
    }

    getPrevSong() {
        if (this.current && this.current.prev) {
            this.current = this.current.prev;
            return this.current;
        } else {
            return null;
        }
    }

    getRandomSong() {
    const songNames = Object.keys(songDictionary); // Get an array of song names from the dictionary
    if (songNames.length > 0) {
        const randomIndex = Math.floor(Math.random() * songNames.length);
        const randomSong = songNames[randomIndex]; // Get the random song name
        const randomSongLink = songDictionary[randomSong]; // Get the associated URL

        this.addSong(randomSong, randomSongLink); // Add the song to the queue
        return this.tail; // Assume the newly added song is now the tail
    }
    return null; // No songs in the dictionary
    }
}

// Initialize the song queue
const songQueue = new SongQueue();


// Show suggestions based on input
function showSuggestions() {
    const input = document.getElementById('songInput').value.toLowerCase();
    const suggestionsBox = document.getElementById('suggestions');
    suggestionsBox.innerHTML = '';
    if (input) {
        const suggestions = Object.keys(songDictionary)
            .filter(song => song.toLowerCase().includes(input))
            .slice(0, 8);
        suggestions.forEach(song => {
            const li = document.createElement('li');
            li.textContent = song;
            li.onclick = () => addSongToQueue(song);
            suggestionsBox.appendChild(li);
        });
    }
}

// Add song to queue
function addSongToQueue(song) {
    const songURL = songDictionary[song];
    songQueue.addSong(song, songURL);
    updateStatus(`Added "${song}" to the queue`);
}

// Play song
function playSong(songNode) {
    if (!songNode) {
        updateStatus('No song to play');
        return;
    }

    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = songNode.songURL;
    audioPlayer.play()
        .then(() => updateStatus(`Now playing: ${songNode.songName}`))
        .catch(() => updateStatus('Playback blocked. Please press Play manually.'));

    audioPlayer.onended = () => {
        const nextSong = songQueue.getNextSong();
        playSong(nextSong);
    };
}

// Play random song
function playRandomSong() {
    const randomSong = songQueue.getRandomSong();
    if (randomSong) {
        playSong(randomSong);
    } else {
        updateStatus('No songs available for random play');
    }
}
function setVolume(value) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.volume = value;
    const volumeLabel = document.getElementById('volumeLabel');
    volumeLabel.textContent = `${Math.round(value * 100)}%`;
}
// Equalizer functionality
function adjustEqualizer(bandIndex, value) {
    console.log(`Equalizer Band ${bandIndex} set to ${value}`);
    // Additional equalizer logic for audio processing can be added here.
}

// Utility functions
function updateQueueDisplay() {
    const queueDisplay = document.getElementById('queueDisplay');
    const queueArray = songQueue.getQueueArray();
    queueDisplay.innerHTML = queueArray.length ? `Current Queue:<br>${queueArray.map(song => song.songName).join('<br>')}` : 'Queue is empty';
}

function updateStatus(message) {
    const status = document.getElementById('status');
    status.textContent = message;
}
