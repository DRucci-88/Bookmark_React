require('./bootstrap');

import React from 'react'
import { render } from 'react-dom'

import { InertiaApp} from "@inertiajs/inertia-react";

const app = document.getElementById('app');

render(
    <InertiaApp initialPage={JSON.parse(app.dataset.page)}
                initialComponent={}
                resolveComponent={name => import(`./Pages/${name}`).then(module => module.default)}
                />,
    app
)

// import { createInertiaApp } from '@inertiajs/inertia-react'

//
// createInertiaApp({
//     resolve: name => require(`./Pages/${name}`),
//     setup({el, App, props}) {
//         render(<App {...props} />, el)
//     },
// }).then(r => '')