import { bindActionCreators } from "@reduxjs/toolkit"
import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import { LoginActions } from "../login/login.actions"
import { Bar } from 'react-chartjs-2';

import "./user.scss"
import { UserToolbar } from "../../common-components/components/user-toolbar/user-toolbar-cmp"
import { Typography } from "@material-ui/core"

function User(props: any): JSX.Element {
    const history = useHistory()

    const [oX, setOX] = useState<any>([])
    const [oY, setOY] = useState<any>([])
    const [date, setDate] = useState<any>("")



    const data = {
        labels: oX,
        datasets: [
            {
                label: 'Total Consumption',
                data: oY,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // console.log('USER PROPS : ', props)

    const [state, setState] = useState()

    useEffect(() => {
        props.GET_UserPage({ userGuid: props.login.userId })
    }, [props.login.userId])

    useEffect(() => {
        // console.log("USER PAGE : ", props.login.user?.userPage)
        const devices = props.login.user?.userPage

        const dateArray: any[] = [];
        const valueArray: number[] = []


        devices?.forEach(device => {
            const sensor = device.sensor;
            const logs = sensor.logs;

            logs.forEach(log => {
                const date: Date = new Date(log.date)
                setDate(date.toUTCString())
                dateArray.push(date)
                valueArray.push(log.value)
            });
        });
        const dateArray2 = dateArray.sort((d1, d2) => d1.getHours() - d2.getHours())

        function isInside(dateArray: Date[], dt: Date) {
            let ok = false
            dateArray.forEach(date => {
                if (date.getHours() == dt.getHours() && date.getMinutes() == dt.getMinutes()) {
                    ok = true
                }
            })
            return ok
        }

        const dateArraay3: Date[] = []

        dateArray2.forEach(date => {
            if (!isInside(dateArraay3, date)) {
                dateArraay3.push(date)
            }
        })

        const dateArraay4 = dateArraay3.map((date) => `${date.getHours()}:0${date.getMinutes()}`)
        setOX(dateArraay4);
        setOY(valueArray);



    }, [props.login.user])

    return (
        <>
            <UserToolbar />
            <Typography>
                Date : {date}
            </Typography>
            <div className=" debug userPageContainer">
                <Bar data={data} />
            </div>
        </>
    )
}

const mapStateToProps = (state: any) => ({
    ...state
})

const mapDispatchToProps = (dispatch: any) => ({ dispatch, ...bindActionCreators({ ...LoginActions }, dispatch) })

export const UserPage = connect(mapStateToProps, mapDispatchToProps)(User)
// conecteaza pagina la store, deci avem access la store
