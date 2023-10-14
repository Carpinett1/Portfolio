import { useState } from 'react';
import Data from '../../database/StacksData';
import style from './stacks.module.css';

function Stacks() {
  const [selectedStack, setSelectedStack] = useState(0);

  const handleSelection = (id: number) => {
    setSelectedStack(id);
  };

  const Stack = Data.Stacks.find((stack) => stack.id === selectedStack);

  return (
    <div>
      <span className="anchor" id="stacks" />
      <div className={ style.stackscontainer }>
        {Stack ? (
          <div className={ style.infoContainer }>
            <div className={ style.stackcardSelected }>
              <img className={ style.image } src={ Stack.image } alt={ Stack.name } />
              <h1>{Stack.name}</h1>
            </div>
            <p>{Stack.description}</p>
          </div>
        ) : (
          <h1 className={ style.selectAStack }>Selecione Uma Stack</h1>
        )}
      </div>
      <div className={ style.stackscontainer }>
        <div className={ style.stacksgrid }>
          {Data && Data.Stacks.map((stack) => (
            <button
              className={ style.stackcard }
              key={ stack.id }
              onClick={ () => handleSelection(stack.id) }
            >
              <a href="#stacks">
                <img className={ style.image } src={ stack.image } alt={ stack.name } />
                <hr />
                <h1>{stack.name}</h1>
              </a>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stacks;
