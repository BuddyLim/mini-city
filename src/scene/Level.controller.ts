import LandController from "../components/Land/Land.controller"

const landXSpacing = 0.5
const landYSpacing = 0.5
const gridSize = 5

export default class LevelController{  
  landGrid: LandController[][]
  loaded: boolean = false
  
  constructor(){
    this.init()
    this.loaded = true
  }
  
  init(){
    this.landGrid = new Array(gridSize)
    Array.from({length: gridSize}).forEach((_, index) => {
      this.landGrid[index] = new Array(gridSize)
    });

    Array.from({length: gridSize}).map((_, xIndex) =>{
      Array.from({length: gridSize}).map((_, zIndex) =>{
        this.landGrid[xIndex][zIndex] = new LandController({
          position: [ xIndex * landXSpacing, 0, zIndex * landYSpacing]
        })
      })
    })
  }

  /**
   * Sets the LevelController.loaded flag to true
   */
  setLoadedFlag(): void{
    this.loaded = true
  }

}