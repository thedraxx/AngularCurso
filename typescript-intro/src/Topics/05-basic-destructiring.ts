interface AudioPlayer {
    audioVolumene: number;
    audioTrack: string;
    audioDuration: number;
    song: string;
    play: () => void;
    details: Details;
}


interface Details {
    audioTrack: string;
    audioDuration: number;
    song: string;
}

const audioPlayer: AudioPlayer = {
    audioVolumene: 100,
    audioTrack: 'track1',
    audioDuration: 120,
    song: 'song1',
    play() {
        console.log('Playing...');
    },
    details: {
        audioTrack: 'track1',
        audioDuration: 120,
        song: 'song1',
    }
};


const { song, details }: AudioPlayer = audioPlayer;
const { audioTrack, audioDuration }: Details = details;


console.log(song); // song1

console.log(audioTrack); // { audioVolumene: 100, audioTrack: 'track1', audioDuration: 120, play: [Function: play], details: { audioTrack: 'track1', audioDuration: 120, song: 'song1' } }



const dbz: string[] = ['Goku', 'Vegeta', 'Gohan'];


const [goku, vegeta, gohan]: string[] = dbz; // Destructuring array



console.log(goku); // Goku