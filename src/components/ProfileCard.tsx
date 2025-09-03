interface ProfileCardProps {
    key: number;
    imageUrl: string;
    name: string;
    title: string;
    github?: string;
  }
  

  function ProfileCard({ name, title, imageUrl, github}: ProfileCardProps) {
    return (
      <div className="card">
        <img src={imageUrl} alt={`Foto de ${name}`} className="card-img" />
        <h2>{name}</h2>
        <p>{title}</p>
        <a href={github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      </div>
    );
  }
  
  export default ProfileCard;
  