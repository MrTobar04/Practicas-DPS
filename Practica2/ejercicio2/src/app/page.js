import styles from "./page.module.css";

const Equipos = ({ equipos }) => {
  return (
    <div className={styles.container__list}>
      <h2 className={styles.title}>Equipos de Fútbol</h2>
      {equipos.map((equipo) => (
        <div key={equipo.id}>
          <h3 className={styles.nameclub}>{equipo.nombre}</h3>
          <ul>
            {equipo.plantilla.map((jugador) => (
              <li className={styles.container__list} key={jugador.id}>
                <strong>{jugador.nombre}</strong>
                <p>
                  Altura: {jugador.Altura}m <br /> Peso: {jugador.Peso}
                </p>
                {jugador.imagen && (
                  <img
                    src={jugador.imagen}
                    alt={`Foto de ${jugador.nombre}`}
                    width={150}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const equiposData = [
    {
      id: 1,
      nombre: "Real Madrid",
      plantilla: [
        {
          id: 1,
          nombre: "Eden Hazard",
          Altura: "1.75",
          Peso: "74Kg",
          imagen: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2019/06/13/5fa53274240f4.jpeg",
        },
        {
          id: 2,
          nombre: "Gonzalo García",
          Altura: "1.82",
          Peso: "74Kg",
          imagen: "https://media.elcomercio.com/wp-content/uploads/2025/06/PORTADA-NOTA-EC-759-1024x683.jpg",
        },
        {
          id: 3,
          nombre: "Karim Benzema",
          Altura: "1.85",
          Peso: "81Kg",
          imagen: "https://estaticos-cdn.prensaiberica.es/clip/754893b8-fbde-45bf-a886-ee7e4c48c11e_16-9-discover-aspect-ratio_default_0.jpg",
        },
      ],
    },
    {
      id: 2,
      nombre: "Barcelona",
      plantilla: [
        {
          id: 1,
          nombre: "Marc-André ter Stegen",
          Altura: "1.75",
          Peso: "74Kg",
          imagen: "https://betting.cdnppb.net/football/images/Ter%20Stegen%20Barcelona%20fail%201280.640x360.jpg",
        },
        {
          id: 2,
          nombre: "Iñigo Martinez",
          Altura: "1.82",
          Peso: "74Kg",
          imagen: "https://icdn.football-espana.net/wp-content/uploads/2024/08/Inigo-Martinez.jpeg",
        },
        {
          id: 3,
          nombre: "Gavi",
          Altura: "1.85",
          Peso: "81Kg",
          imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3buQMOGEowYd0HpU-Ap-EFjUav6gYrGaymw&s",
        },
      ],
    },
    {
      id: 3,
      nombre: "Paris Saint-Germain",
      plantilla: [
        {
          id: 1,
          nombre: "Ousmane Dembélé",
          Altura: "1.78",
          Peso: "67Kg",
          imagen: "https://the18.com/sites/default/files/feature-images/The18-Photo-Dembele-vs-Barcelona.jpeg",
        },
        {
          id: 2,
          nombre: "Achraf Hakimi",
          Altura: "1.81",
          Peso: "73Kg",
          imagen: "https://static.srpcdigital.com/styles/1037xauto/public/2025-05/1055699.jpeg.webp",
        },
        {
          id: 3,
          nombre: "Gianluigi Donnarumma",
          Altura: "1.96",
          Peso: "90Kg",
          imagen: "https://icdn.sempreinter.com/wp-content/uploads/2025/05/arsenal-fc-v-paris-saint-germain-uefa-champions-league-2024-25-semi-final-first-leg1.jpg",
        },
      ],
    },
    {
      id: 4,
      nombre: "Granada CF",
      plantilla: [
        {
          id: 1,
          nombre: "Ricard Sánchez",
          Altura: "1.78",
          Peso: "70Kg",
          imagen: "https://e00-xlk-ue-marca.uecdn.es/uploads/2025/06/08/6844bc45cb54b.jpeg",
        },
        {
          id: 2,
          nombre: "Raúl Torrente",
          Altura: "1.91",
          Peso: "84Kg",
          imagen: "https://www.shutterstock.com/editorial/image-editorial/M2T6Q9ybN6T8Qd55NDQ4ODA=/raul-torrente-granada-fc-action-during-spanish-1500w-14124140b.jpg",
        },
        {
          id: 3,
          nombre: "Antonio Puertas",
          Altura: "1.83",
          Peso: "75Kg",
          imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5pleyekEuJnx4qfyKQP5nt-XBdtnPM5bwcg&s",
        },
      ],
    },
  ];

  return (
    <main className={styles.main}>
      <div>
        <h1>Mi Aplicación de Fútbol</h1>
        <Equipos equipos={equiposData} />
      </div>
    </main>
  );
}
