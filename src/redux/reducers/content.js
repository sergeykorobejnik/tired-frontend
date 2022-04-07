import produce from "immer";
import {PUT_FETCHED_DATA} from "../actions/actionTypes";

const initialState = {
    itemArr: [
        {
            id: '124556',
            title: 'Junior Front End Developer (React/React Native)',
            content: 'Слава Україні!\n' +
                'У важкий для країни час NerdySoft продовжує підтримувати економічний тил держави.' +
                ' Готові запропонувати співпрацю тим, хто можливо втратив робоче місце, чи має бажання змінити',
            src: 'djinni'
        },
        {
            id: '1245567',
            title: 'Junior Front End Developer (React/React Native)',
            content: 'Слава Україні!\n' +
                'У важкий для країни час NerdySoft продовжує підтримувати економічний тил держави.' +
                ' Готові запропонувати співпрацю тим, хто можливо втратив робоче місце, чи має бажання змінити',
            src: 'dou'
        },
    ]

}

export default function content (state = initialState, action) {

    switch (action.type) {
        case PUT_FETCHED_DATA: {
            const nextState = produce(state, draft => {

            })
            return nextState
        }

    }

    return state

}