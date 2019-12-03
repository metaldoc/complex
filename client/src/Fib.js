import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
    state = {
        seenIndexes: [],
        vales: {},
        index: ''
    };

    componentDidMount() {
        this.fetchValues();
        this.fetchIndexes();
    }

    async fetchValues() {
        const vales = await axios.get('/api/values/current');
        this.setState({ values: values.data });
    }

    async fetchIndexes() {
        const seenIndexes = await axios.get('/api/vales/all');
        this.setState({
            seenIndexes: seenIndexes.data
        });
    }
}