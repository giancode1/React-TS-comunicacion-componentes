import { FC } from "react";

const Sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl']

interface Props{
    selectedSize: string;
    onSizeChange: (size: string) => void; //es una funcion que recibe un string como parametro y no retorna nada
}

export const SizeSelector:FC<Props> = ({ selectedSize, onSizeChange }) => { //FC = Function Component
  return (
    <div style={{display: 'flex'}}>
        {
            Sizes.map(size => (
                <button 
                    key={size} 
                    className={selectedSize === size ? 'active' : ''}
                    onClick={ () => onSizeChange(size) }
                >
                    {size}
                </button>
            ))
        }
    </div>
  )
}
