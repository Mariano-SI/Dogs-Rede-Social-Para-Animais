import React, {useEffect, useState} from 'react'
import { UserStatsGraphsStyled } from './UseStatsGraphs.style';
import {VictoryPie, VictoryChart, VictoryBar} from 'victory'


interface IData{
    id:number;
    title:string;
    acessos: string;
}

interface IUserStatsGraphs{
    data: Array<IData>
}
interface IPieGraph{
    x: string;
    y:number;
}

const UserStatsGraphs = ({data}: IUserStatsGraphs) => {
    const [graphData, setGraphData] = useState<[]|Array<IPieGraph>>([]);

    const [total, setTotal] = useState(0);

    useEffect(()=>{
        const graph = data.map((item)=>(
            {x:item.title, y:+item.acessos}
        ));
        setGraphData(graph);

        setTotal(data.map(({acessos})=> +acessos).reduce((a,b)=> a+b, 0));
    }, [data]);

    return (
        <UserStatsGraphsStyled className="animeLeft">
            <div className='total graphItem'>
                <p>Acessos: {total}</p>
            </div>
            <div className='graphItem'>
                <VictoryPie 
                data={graphData} 
                innerRadius={50} 
                padding={{top:20, bottom:20, left:80, right:80 }} 
                style={{
                    data:{
                        fillOpacity:.9,
                        stroke:'#fff',
                        strokeWidth:2
                    }, labels:{
                        fontSize:14,
                        fill:'#333',
                    }}
                    }/>
            </div>
            <div className='graphItem'>
                <VictoryChart>
                    <VictoryBar alignment='start' data={graphData}>
                    </VictoryBar>
                </VictoryChart>
            </div>
        </UserStatsGraphsStyled>
    )
}

export default UserStatsGraphs