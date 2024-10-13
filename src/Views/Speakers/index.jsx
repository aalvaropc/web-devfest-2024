import CardSpeaker from "../../components/Speakers/CardSpeaker";
import "./Speakers.css";

import speakersData from "../../data/speakers.json";

const Speakers = () => {
  const speakersToDisplay = speakersData.speakers.filter((speaker) => {
    return true;
  });

  return (
    <div className="speakers">
      <h1 className="speakers__titulo">Speakers</h1>
      <div className="speakers__container">
        {speakersToDisplay.map((speaker) => (
          <CardSpeaker
            key={speaker.speaker_image}
            speaker={speaker.speaker_name}
            imagen={speaker.speaker_image}
            speaker_desc={speaker.speaker_desc}
            modality={speaker.modality}
            linkedin_url={speaker.linkedin_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Speakers;
