import './App.css';
import ProfileCard from './components/ProfileCard';

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
    imageUrl: '...', 
    name: 'Marcus Tavares Pires', 
    title: 'Estudante de ciência da computação',
    github: 'https://github.com/Taylanne02',
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
      <h1>Exemplo com React</h1>
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
