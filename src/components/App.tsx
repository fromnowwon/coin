import React, { useEffect, useState } from 'react';
import './App.scss';

interface CoinsType {
	rank: number,
	name: string,
	symbol: string,
	quotes: { 
		KRW: { 
			price: number,
			market_cap: number,
			volume_24h: number,
			percent_change_24h: number,
			percent_change_7d: number
		}
	},
}

function App(): JSX.Element {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]);

	const refreshPage = ()=>{
		window.location.reload();
	}
	
	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers?quotes=KRW")
		.then(response => response.json())
		.then(json => {
			setCoins(json.slice(0, 100));
			setLoading(false);
		})
		.catch((error) => {
			console.log(error);
			// 에러 넘버를 확인하고 싶다면,
			console.log(error.response.status);
		})
	}, [])

	return (
		<div className="App">
			<section className="coin-tracker">
				<div className="title flex-grid flex-grid--center">
					<h1>암호화폐 실시간 TOP 100</h1>
					<div className="btn">
						<button onClick={ refreshPage }>새로고침</button>
					</div>
				</div>
				<div className="result">
				{
					loading
					? <span className="loader">Loading...</span> 
					: (
						<div className="result__inner">
							<table>
								<thead>
									<tr>
										<th>순위</th>
										<th>종목</th>
										<th>기호</th>
										<th>가격(KRW)</th>
										<th>총 시가</th>
										<th>거래량(24H)</th>
										<th>변동(24H)</th>
										<th>변동(7D)</th>
									</tr>
								</thead>
								<tbody>
									{
										coins.map((coin: CoinsType, idx: number) => (
											<tr key={ idx }>
												<td className="align-right">{ coin.rank }</td>
												<td>{ coin.name }</td>
												<td>{ coin.symbol }</td>
												<td className="align-right">₩{ Number(coin.quotes.KRW.price.toFixed(1)).toLocaleString() }</td>
												<td className="align-right">{ (coin.quotes.KRW.market_cap / 1000000000000).toFixed(2) }T</td>
												<td className="align-right">{ (coin.quotes.KRW.volume_24h / 1000000000000).toFixed(2) }T</td>
												<td className="align-right">{ coin.quotes.KRW.percent_change_24h.toFixed(2) }%</td>
												<td className="align-right">{ coin.quotes.KRW.percent_change_7d.toFixed(2) }%</td>
											</tr>
										))
									}
								</tbody>
							</table>
						</div>
					)
				}
				</div>
			</section>
		</div>
	);
}

export default App;
