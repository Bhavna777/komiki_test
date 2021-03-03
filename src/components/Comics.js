import './../css/Comics.css';
import Card from './ComicsCard';
import CardData from './CardData';
import Header from './Header'
import Footer from './Footer'


function Comics() {
  return (
    <div className="Comics">
      <Header />
      <div className="row">
        <div className="column">
          <Card src={CardData[0].src} category={CardData[0].category} likes={CardData[0].likes}/>
          <Card src={CardData[5].src} category={CardData[5].category} likes={CardData[5].likes}/>
          <Card src={CardData[10].src} category={CardData[10].category} likes={CardData[10].likes}/>
          <Card src={CardData[15].src} category={CardData[15].category} likes={CardData[15].likes} />
          <Card src={CardData[20].src} category={CardData[20].category} likes={CardData[20].likes} />
          <Card src={CardData[25].src} category={CardData[25].category} likes={CardData[25].likes} />
          <Card src={CardData[30].src} category={CardData[30].category} likes={CardData[30].likes} />
          <Card src={CardData[35].src} category={CardData[35].category} likes={CardData[35].likes} />
          <Card src={CardData[40].src} category={CardData[40].category} likes={CardData[40].likes} />
          <Card src={CardData[45].src} category={CardData[45].category} likes={CardData[45].likes} />
          <Card src={CardData[50].src} category={CardData[50].category} likes={CardData[50].likes} />
          <Card src={CardData[55].src} category={CardData[55].category} likes={CardData[55].likes} />
          <Card src={CardData[60].src} category={CardData[60].category} likes={CardData[60].likes} />
        </div>
        <div className="column">
          <Card src={CardData[1].src} category={CardData[1].category} likes={CardData[1].likes} />
          <Card src={CardData[6].src} category={CardData[6].category} likes={CardData[6].likes} />
          <Card src={CardData[11].src} category={CardData[11].category} likes={CardData[11].likes}/>
          <Card src={CardData[16].src} category={CardData[16].category} likes={CardData[16].likes} />
          <Card src={CardData[21].src} category={CardData[21].category} likes={CardData[21].likes} />
          <Card src={CardData[26].src} category={CardData[26].category} likes={CardData[26].likes} />
          <Card src={CardData[31].src} category={CardData[31].category} likes={CardData[31].likes} />
          <Card src={CardData[36].src} category={CardData[36].category} likes={CardData[36].likes} />
          <Card src={CardData[41].src} category={CardData[41].category} likes={CardData[41].likes} />
          <Card src={CardData[46].src} category={CardData[46].category} likes={CardData[46].likes} />
          <Card src={CardData[51].src} category={CardData[51].category} likes={CardData[51].likes} />
          <Card src={CardData[56].src} category={CardData[56].category} likes={CardData[56].likes} />
          <Card src={CardData[61].src} category={CardData[61].category} likes={CardData[61].likes} />
        </div>
        <div className="column">
          <Card src={CardData[2].src} category={CardData[2].category} likes={CardData[2].likes} />
          <Card src={CardData[7].src} category={CardData[7].category} likes={CardData[7].likes} />
          <Card src={CardData[12].src} category={CardData[12].category} likes={CardData[12].likes} />
          <Card src={CardData[17].src} category={CardData[17].category} likes={CardData[17].likes} />
          <Card src={CardData[22].src} category={CardData[22].category} likes={CardData[22].likes} />
          <Card src={CardData[27].src} category={CardData[27].category} likes={CardData[27].likes} />
          <Card src={CardData[32].src} category={CardData[32].category} likes={CardData[32].likes} />
          <Card src={CardData[37].src} category={CardData[37].category} likes={CardData[37].likes} />
          <Card src={CardData[42].src} category={CardData[42].category} likes={CardData[42].likes} />
          <Card src={CardData[47].src} category={CardData[47].category} likes={CardData[47].likes} />
          <Card src={CardData[52].src} category={CardData[52].category} likes={CardData[52].likes} />
          <Card src={CardData[57].src} category={CardData[57].category} likes={CardData[57].likes} />
          <Card src={CardData[62].src} category={CardData[62].category} likes={CardData[62].likes} />
        </div>
        <div className="column">
          <Card src={CardData[3].src} category={CardData[3].category} likes={CardData[3].likes} />
          <Card src={CardData[8].src} category={CardData[8].category} likes={CardData[8].likes} />
          <Card src={CardData[13].src} category={CardData[13].category} likes={CardData[13].likes} />
          <Card src={CardData[18].src} category={CardData[18].category} likes={CardData[18].likes} />
          <Card src={CardData[23].src} category={CardData[23].category} likes={CardData[23].likes} />
          <Card src={CardData[28].src} category={CardData[28].category} likes={CardData[28].likes} />
          <Card src={CardData[33].src} category={CardData[33].category} likes={CardData[33].likes} />
          <Card src={CardData[38].src} category={CardData[38].category} likes={CardData[38].likes} />
          <Card src={CardData[43].src} category={CardData[43].category} likes={CardData[43].likes} />
          <Card src={CardData[48].src} category={CardData[48].category} likes={CardData[48].likes} />
          <Card src={CardData[53].src} category={CardData[53].category} likes={CardData[53].likes} />
          <Card src={CardData[58].src} category={CardData[58].category} likes={CardData[58].likes} />
          <Card src={CardData[63].src} category={CardData[63].category} likes={CardData[63].likes} />
        </div>
        <div className="column">
          <Card src={CardData[4].src} category={CardData[4].category} likes={CardData[4].likes} />
          <Card src={CardData[9].src} category={CardData[9].category} likes={CardData[9].likes} />
          <Card src={CardData[14].src} category={CardData[14].category} likes={CardData[14].likes} />
          <Card src={CardData[19].src} category={CardData[19].category} likes={CardData[19].likes} />
          <Card src={CardData[24].src} category={CardData[24].category} likes={CardData[24].likes} />
          <Card src={CardData[29].src} category={CardData[29].category} likes={CardData[29].likes} />
          <Card src={CardData[34].src} category={CardData[34].category} likes={CardData[34].likes} />
          <Card src={CardData[39].src} category={CardData[39].category} likes={CardData[39].likes} />
          <Card src={CardData[44].src} category={CardData[44].category} likes={CardData[44].likes} />
          <Card src={CardData[49].src} category={CardData[49].category} likes={CardData[49].likes} />
          <Card src={CardData[54].src} category={CardData[54].category} likes={CardData[54].likes} />
          <Card src={CardData[59].src} category={CardData[59].category} likes={CardData[59].likes} />
          <Card src={CardData[64].src} category={CardData[64].category} likes={CardData[64].likes} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Comics;
