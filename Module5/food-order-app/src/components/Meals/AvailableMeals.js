import React,{useEffect,useState} from 'react'
import styles from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'

export default function AvailableMeals() {
  const [mealsData,setMealsData] = useState([]);
  const [isLoading,setLoading] = useState(true);
  const [error,setError] = useState(undefined);
  useEffect(()=>{
    const fetchMeals = async ()=>{
      try{
        const res = await fetch('https://react-http-1e282-default-rtdb.firebaseio.com/meals.json');
        if(!res.ok){
          throw new Error('Not able to fetch :(');
        }
        const data = await res.json();
        const MealsData =[];
        for(const key in data){
          MealsData.push({
            id:key,
            name:data[key].name,
            description:data[key].description,
            price:data[key].price,
          });
        }
        setMealsData(MealsData);
        setLoading(false);
      }catch(error){
        setLoading(false);
        setError(error.message);
      }
    }
    fetchMeals();
  },[]);

  if(isLoading){
    return(
      <section className={styles.loading}>
        <p>Loading Meals For You...</p>
      </section>
    );
  }
  if(error){
    return(
      <section className={styles.error}>
        <p>{error}</p>
      </section>
    );
  }

    return (
        <div className={styles.meals}>
            <Card >
                {mealsData.map((p)=><MealItem data={p} key={p.id}></MealItem>)}
            </Card>
        </div>
    )
}
