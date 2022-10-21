def main1():
    import sys
    from streamlit.web import cli as stcli
    import streamlit
    streamlit.set_page_config(layout="wide")

    def main():
        import streamlit as st
        import pandas as pd
        df=pd.read_csv("E://templates//python//flight.csv")
        del df['Unnamed: 0']
        a=['Vistara','Indigo','GO_FIRST','Air_India','AirAsia','SpiceJet']
        st.header("Select the flight based on your prefernces")
        ip1=st.selectbox("Select the destination City",('Hyderabad','Banglore','Mumbai','Delhi','Kolkata','Chennai'))
        ip2=st.selectbox('Select the source city',('Hyderabad','Banglore','Mumbai','Delhi','Kolkata','Chennai'))
        if st.button('Show'):
            cols=st.columns(7,gap="large")
            cols[0].header("Airline")
            cols[0].header('Price')
            n=1
            for i in a:
                x=df.loc[(df['source_city']==ip2) & (df['destination_city']==ip1) & (df['airline']==i)]
                y=x['price'].min()
                cols[n].subheader(i)
                cols[n].subheader(y)

                n=n+1
    if __name__=='__main__':
        if streamlit._is_running_with_streamlit:
            main()
        else:
            sys.argv=["streamlit","run",sys.argv[0]]
            sys.exit(stcli.main())
main1()