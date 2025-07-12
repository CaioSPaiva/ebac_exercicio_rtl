import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://images.tcdn.com.br/img/img_prod/460977/carro_miniatura_metal_die_cast_batmovel_1989_dc_comics_escala_1_24_black_friday_mkp_124349_1_54530533748be3565bb1213e2aac609c.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
