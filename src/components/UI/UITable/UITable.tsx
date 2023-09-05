import { Dispatch } from 'react';
import cn from 'classnames';

import styles from './UITable.module.css';

interface IProps {
    title: string[],
    content: (string|number)[][],
    sortedColumn: string,
    setSortedColumn: Dispatch<React.SetStateAction<string>>,
}

const UITable = ({title, content, sortedColumn, setSortedColumn}: IProps) => {
  const isActive = (column: string) => {
    return column === sortedColumn ? styles.arrow : '';
  };

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.trhead}>
            {title.map((title)=> {
              return(
                <th 
                  className={cn(styles.thhead, isActive(title))}
                  key={title}
                  onClick={() => setSortedColumn(title)}
                >
                  {title.toLocaleUpperCase() + '  ⯅'}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {content.map((array, key) => {
            return(
              <tr 
                key={key} 
                className={styles.trbody}
              >
                {array.map((value) => {
                  return(
                    <td 
                      className={styles.tdbody}
                      key={value + String(new Date()) + Math.random()}
                    >
                      {value}
                    </td>
                  );
                })}
              </tr>
            );
          })
          }
        </tbody>
      </table>
    </div>
  );
};

export default UITable;