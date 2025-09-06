import {Tabs} from "expo-router"

export default function TabsLayout(){
   return<Tabs>
      <Tabs.Screen name="index" options={{title:""}}/>
      < Tabs.Screen name="admin" options={{title:"Admin"}}/>
      <Tabs.Screen name="profile" options={{title:"Acount verwalten"}}/>
   </Tabs>;
}