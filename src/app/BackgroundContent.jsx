import React from 'react';
import styles from './styles/Background.module.css';
import wrapper from './styles/App.module.css';

export default function BackgroundContent() {
  const mokdata = [
    {
      title: 'Мы',
      text: '1',
      subtitle: 'на рынке'
    },
    {
      title: 'Гарантируем',
      text: '50%',
      subtitle: 'Безопасность'
    },
    {
      title: 'Календарик за',
      text: '2001',
      subtitle: 'В подарок'
    },
    {
      title: 'Путешествие',
      text: '597',
      subtitle: 'Дней'
    }
  ]
  return (
    <section className={`${wrapper.WrapperContainer} ${styles.Content}`}>
      <div className={styles.LeftCol}>
        <span className={styles.BigText}>Путешествие</span>
        <span className={styles.SmallText}>на красную планету</span>
        <button className={styles.Button}><a href='#' className={styles.ButtonText}>Начать путешествие</a></button>
      </div>
      <div className={styles.ButtonLine}>
        <svg width="406" height="57" viewBox="0 0 406 57">
          <image id="line" width="406" height="57" href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZYAAAA5CAYAAAAVxQ0ZAAAEIklEQVR4nO3d307TYBzG8V83tMBWRVCOjBfisV6KpxxxxlVwzomXIRfgjZhoQjIRhxMGo6bkaWyWtnv3l7d9v59kWRlt967OPLx/G6VpGplZ9kj1AABgYR2FyYO2Iy4lAGAZncKxEz13uKIAgEVNh0jeFNal9gIAWERZ7eRBjy61FwDAvKqCI1XTWKSAAQDASV2NJC30u2zRNAYAcOHS1DVR0xjhAgCYacvxEj2oBrOl7YnDMQCAAM3TOZ8Fy72OcQ0kAEBg5h31lYXLnbaf0zQGAJiWLemy6EXp6jGhaQwAkFumSWuiGswz1VzuuaoAgGVqLLlI4WJqJmMhSwAI2Cpm1mdBMtZzzGx9AAjbKmosRV116t/RNAYAYVp1sJiaxmLVYG75XgFAWNbRbJUFyo22dxiSDABhWWd/yK2aw3ZZyBIAwrGOprBpWahsq99lzHcLANptE8Fiag7b1vYNQ5IBoL02FSy5WJMyb5itDwDttOk5J7dqDtstTKoEALTIpmssuY7CJau1/OULBQDt8VTBYup32VHIjHSfFwBAwz1lsOS2NVt/xGx9AGg+H4LF1KHfU6c+s/UBoMF8CRZTk1hf/S4jhiQDQDP5tBJx1scy1PYLZusDQDP5VGMpijVq7A+z9QGgWXwNFlO/S6I+l5EH5QEAOPA5WExNdYm2hwxJBgD/+R4suZ6ax34zJBkA/NaUYDEFS6J+F2brA4CnmhQsppFiL7UE/zVDkgHAP00LFtNSMPlw5CtWSQYAvzQxWHI9DUm+YkgyAPijycFiWmNsT8ORrz0oDwAEr+nBYmoS21N/yyX9LgDwtNoQLFbod4kVLncelAkAgtSWYMntatTYL4YkA8DTaFuwmG55vK8l+K88KA8ABKWNwWJaCuaV+l8GDEkGgM1pa7DkXugeLwNuIAYAm9H2YDHdV/9AzWJDh/0BAEsIIVhMS/C/1gKWA4YkA8D6hBIspiHJB5pUecEqyQCwHiEFSy7RhMoBNxADgNULMVhMEynfaAn+Sw/KAwCtEWqwmIYiH6q/5YK7UwLAaoQcLKZ+l33N2L9gSDIALC/0YMn1NWpswJBkAFhOh+v3KFty/7tqL4eqyQAAZntnZl/0R/l59jPB8l92s7Bv6nt5q7kvAIB6ZycnJx+TJOllz2b2maawcvsaOZYUai9RyXbxd2b1v5t1/KxzVO1f915158hf69QcW3X+TsXvqt7XtUxRxXuU/ZyXPS0pj+s568rjWkaXc7leb5eyzHPdXT5X1TWaLq/LZ1zkdddjXPaf9X+oroxln336GKv496s7pup7UFfmWfvNOkfd61XbLvuW7f/4HMexjcfjqN/v23A4HPNXebmfevWHbwUDAM+cHx8ffzg9PU2Pjo6yoPlKjQUAsIysj+XMzN5noWJmn/4B59MAgqpznlYAAAAASUVORK5CYII=" />
        </svg>
      </div>
      <div className={styles.Cards}>
        {mokdata.map(item => <Card key={item.text} title={item.title} text={item.text} subtitle={item.subtitle}></Card>)}
      </div>
    </section>
  )
}

function Card({ title, text, subtitle }) {
  return (
    <div className={styles.Card}>
      <span className={styles.Title}>{title}</span>
      <span className={styles.Text}>{text}</span>
      <span className={styles.Subtitle}>{subtitle}</span>
    </div>
  )
}
