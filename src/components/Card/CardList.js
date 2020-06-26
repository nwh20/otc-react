import React, { Component } from 'react';
import Cards from './Cards';
import IconSpinner from '../Fontawesome/IconSpinner';
import axios from 'axios';

const baseUrl = 'http://svcs.ebay.com/services/search/FindingService/v1?SERVICE-VERSION=1.13.0';
const appID = '&SECURITY-APPNAME=NamwonHe-oldiethe-PRD-92eae7200-5104a421';
const storeName = 'bummesasak_0';
const findInStore = `&OPERATION-NAME=findItemsAdvanced&itemFilter(0).name=Seller&itemFilter(0).value=${storeName}`;
const respFormat = '&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD=true';

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: "camera",
            page: 1,
            items: '',
            show: true,
        }
    }

    insertItems (item) {
        this.setState({
          items: item,
        });
    }
    
    componentDidMount() {
        let url = `${baseUrl}${appID}${respFormat}${findInStore}`;

        if (this.state.keyword !== "") {
          url += `&keywords=${this.state.keyword}`
        }

        axios.get(url)
            .then( result => {
                if (result.data.findItemsAdvancedResponse[0].searchResult[0].item) {
                  let items = result.data.findItemsAdvancedResponse[0].searchResult[0].item;
                  this.insertItems(items);
                }
            })
    }

    render() {
        return (
            <div className="card-list">
                {this.state.items.length > 0 ? (
                    this.state.items && this.state.items.map((item, index) => (
                        <Cards item={item} key={index} />
                    ))
                ) : (
                    <div className="loading">
                        <IconSpinner />
                        <p>List loading..</p>
                    </div>
                )} 
            </div>
        );
    }
}

export default CardList;

