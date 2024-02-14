import './App.css'
import Button from "./components/Button.jsx";
import bag1 from './assets/bag_1.png'
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import our_story from "./assets/our_story.png"
import Product from "./components/Product.jsx";
import Tile from "./components/Tile.jsx";

function App() {
  return (<>
          <h1>Handbags & Purses</h1>
          <nav>
            <Button buttonType="button">to the collection</Button>
            <Button buttonType="button">shop all bags</Button>
            <Button buttonType="button" disabled>pre-orders</Button>
              {/*<Button buttonType="button" handleClick={()=>console.log("to the collection")}>to the collection</Button>*/}
            {/*<Button buttonType="button" handleClick={()=>{}} disabled>pre-orders</Button>*/}
          </nav>
          <main>
              <Product label="Best seller" image={bag1} name="The handy bag" price="400"/>
              <Product label="Best seller" image={bag2} name="The stylish bag" price="250"/>
              <Product label="New collection" image={bag3} name="The simple bag" price="300"/>
              <Product label="New collection" image={bag4} name="The trendy bag" price="150"/>
          </main>
          <footer>
              <Tile title={"The brand"}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, quisquam repudiandae. Accusamus accusantium aspernatur facere minus molestiae non vel voluptate.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, quisquam repudiandae. Accusamus accusantium aspernatur facere minus molestiae non vel voluptate.</p>
              </Tile>
              <Tile image={brand} alt="Brand logo"/>
              <Tile image={our_story} alt="The designers"/>
              <Tile title={"Our story"}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias consequatur deserunt in, laborum maiores placeat quidem quod rem similique?</p>
              </Tile>
          </footer>
      </>
  )
}

export default App
