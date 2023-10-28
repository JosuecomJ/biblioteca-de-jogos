import Game from "./components/Game";
import NewGameForm from "./components/NewGameForm";
import useGameCollections from "./hooks/useGameCollections";

function App() {
  const { games, addGame, removeGame } = useGameCollections();

  return (
    <div className="app">
      <h1>Biblioteca de Jogos</h1>
      <NewGameForm addGame={addGame} />
      <div className="games">
        {games.length > 0 ? (
          games.map((game) => (
            <Game
              key={game.id}
              title={game.title}
              cover={game.cover}
              onRemove={() => removeGame(game.id)}
            />
          ))
        ) : (
          <h2>Ainda não a Jogos adicionados, adicione algum.</h2>
        )}
      </div>
    </div>
  );
}

export default App;
