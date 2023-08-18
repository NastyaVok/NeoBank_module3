import styles from './UITabs.module.css';

interface IProps {
    component: JSX.Element,
    ind: number,
    tab: Number,
}

const UITabs = ({tab,component, ind}: IProps) => {
  const isActive = ( ind: number ) => {
    return ind === tab? '' : styles.hidden;
  };

  return (
    <div className={isActive(ind)}>
      {component} 
    </div>
  );
};

export default UITabs;