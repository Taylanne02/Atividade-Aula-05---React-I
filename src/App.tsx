import './App.css';
import ProfileCard from './components/ProfileCard';
import './App.css';


function App() {
  const profilesData = [
  { 
    id: 1, 
    imageUrl: 'https://avatars.githubusercontent.com/u/121128172?s=400&u=b536899f3c7ac5e37b7a2c49018a0ab0171911ac&v=4', 
    name: 'Taylanne Castelo Branco Cavalcante', 
    title: 'Estudante de ciência da computação',
    github: 'https://github.com/Taylanne02',
  },
  {
    id: 2,
    imageUrl: 'https://avatars.githubusercontent.com/u/177367303?s=400&u=0ccbd2194c098bf49e2fcfeba35fd60ef2d53b7d&v=4%27', 
    name: 'Marcus Tavares Pires', 
    title: 'Estudante de engenharia de software',
    github: 'https://github.com/marcustav',
  },
  {
    id: 3,
    imageUrl: 'https://avatars.githubusercontent.com/u/85763297?v=4', 
    name: 'Nicollas Souza Rodrigues', 
    title: 'Estudante de engenharia de software',
    github: 'https://github.com/nicollasszr',
  },
];

  return (
    <div className="App">
      <h1>Integrantes do BuscaMed</h1>
      <div className="profiles-container">
        {profilesData.map(profile => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            title={profile.title}
            imageUrl={profile.imageUrl}
            github={profile.github}
          />
        ))}
      </div>
    </div>
  );
}

export default App;


