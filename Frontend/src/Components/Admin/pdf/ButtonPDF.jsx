import {
  PDFDownloadLink,
  pdf,
  Document,
  Page,
  Text,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import { useState, useEffect } from "react";
function ButtonPDF({ data }) {
  const [oficinasMasReservadas, setOficinasMasReservadas] = useState([]);
  const [oficinasMejorRendimiento, setOficinasMejorRendimiento] = useState([]);
  const [oficinasPeorRendimiento, setOficinasPeorRendimiento] = useState([]);
  const [ingresosTotaless, setIngresosTotaless] = useState("");
  const [totalEspaciosTrabajos, setTotalEspaciosTrabajos] = useState("");
  const [totalReservacioness, setTotalReservacioness] = useState("");
  console.log(oficinasMasReservadas);

  useEffect(() => {
    if (data[0]) {
      const {
        espaciosTrabajoMasReservado,
        espaciosTrabajoMejorRendimiento,
        espaciosTrabajoPeorRendimiento,
        ingresosTotales,
        totalEspaciosTrabajo,
        totalReservaciones,
      } = data[0];

      setOficinasMasReservadas(espaciosTrabajoMasReservado);
      setOficinasMejorRendimiento(espaciosTrabajoMejorRendimiento);
      setOficinasPeorRendimiento(espaciosTrabajoPeorRendimiento);
      setIngresosTotaless(ingresosTotales);
      setTotalEspaciosTrabajos(totalEspaciosTrabajo);
      setTotalReservacioness(totalReservaciones);
    }
  }, [data]);

  const styles = StyleSheet.create({
    page: { margin: "2cm", fontFamily: "Helvetica", fontSize: 14 },
    cabecera: {
      backgroundColor: "#000034",
      height: "3cm",
      width: "17.5cm",
      paddingLeft: "1cm",
      paddingRight: "1cm",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
    },
    head: {
      height: "2cm",
      width: "15.6cm",
      flexDirection: "column",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
    },
    empresa: {
      display: "flex",
      fontSize: 15,
      textAlign: "center",
      color: "white",
      justifyContent: "flex-end",
      paddingBottom: "0.3cm",
      fontFamily: "Helvetica-Bold",
    },
    titulo: {
      display: "flex",
      textAlign: "center",
      color: "white",
      justifyContent: "flex-end",
      paddingBottom: "0.3cm",
      fontSize: 20,
      fontFamily: "Helvetica-Bold",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      width: "17.5cm",
      height: "21.7cm",
    },
    nombre: {
      display: "flex",
      width: "17.5cm",
      marginTop: "0.15cm",
      textAlign: "right",
      marginBottom: "0.3cm",
      flexDirection: "row",
    },
    group: {
      width: "17.5cm",
      flexDirection: "column",
    },
    reservasTotales: {
      display: "flex",
      width: "10cm",
    },
    oficinas: {
      display: "flex",
      width: "7.5cm",
    },
    subtitle: {
      backgroundColor: "#dcdcff",
      height: "1.2cm",
      width: "17.5cm",
      justifyContent: "center",
      textAlign: "center",
      marginBottom: "1cm",
      marginTop: "0.6cm",
      fontFamily: "Helvetica-Bold",
    },
    map: {
      display:'flex',
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",

    },
    totalIngresos: { marginBottom: "0.3cm" },
    negrita: { fontFamily: "Helvetica-Bold" },
  });

  const myDoc = (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <View style={styles.cabecera}>
          <View style={styles.logo}></View>
          <View style={styles.head}>
            <View style={styles.empresa}>
              <Text>FlexWork</Text>
            </View>
            <View style={styles.titulo}>
              <Text>Estadisticas</Text>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.nombre}>
            <Text style={styles.nombre}>
              <Text style={styles.negrita}>FlexWork</Text>
            </Text>
          </View>

          <Text style={styles.totalIngresos}>
            <Text style={styles.negrita}>Ingresos totales:</Text>
            {ingresosTotaless}
          </Text>

          <View style={styles.group}>
            <View style={styles.reservasTotales}>
              <Text>
                <Text style={styles.negrita}>Total Reservaciones: </Text>
                {totalReservacioness}
              </Text>
            </View>

            <View style={styles.oficinas}>
              <Text>
                <Text style={styles.negrita}>Total oficinas:</Text>{" "}
                {totalEspaciosTrabajos}
              </Text>
            </View>
          </View>

          <View style={styles.subtitle}>
            <Text>Oficinas con mejor rendimiento economico</Text>
          </View>

          <Text style={styles.map}>
            {oficinasMejorRendimiento.map((ofiMejorRendimiento) => (
              <View key={ofiMejorRendimiento._id}>
                
                <Text style={styles.negrita}>.{ofiMejorRendimiento.titulo} </Text>
              </View>
            ))}
          </Text>
        </View>
      </Page>
      <Page size="LETTER" style={styles.page}>
        <View style={styles.subtitle}>
          <Text>Oficinas mas reservadas: </Text>
        </View>

        <View style={styles.group}>
          <Text style={styles.map}>
            {oficinasMasReservadas.map((ofiMasReservadas) => (
              <Text key={ofiMasReservadas._id} style={styles.map}>
                <Text style={styles.negrita}>Titulo:</Text>
                {ofiMasReservadas.titulo}
              </Text>
            ))}
          </Text>
        </View>
      </Page>

      <Page size="LETTER" style={styles.page}>
        <View style={styles.subtitle}>
          <Text>Oficinas con peor rendimiento: </Text>
        </View>

        <View style={styles.group}>
          <Text>
            {oficinasPeorRendimiento.map((ofiPeorRendimiento) => (
              <View style={styles.map} key={ofiPeorRendimiento._id}>
                <Text style={styles.map}>
                  <Text style={styles.negrita}>Titulo: </Text>
                  {ofiPeorRendimiento.titulo}
                </Text>
              </View>
            ))}
          </Text>
        </View>
      </Page>
    </Document>
  );
  return (
    <>
      <PDFDownloadLink
        document={myDoc}
        fileName={"estadisticas.pdf"}
        className="bg-azulOscuro rounded-xl p-3 text-white cursor-pointer mt-10 font-Montserrat"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Cargando documento..." : "Descargar PDF"
        }
      </PDFDownloadLink>
    </>
  );
}

export default ButtonPDF;
/* <Document>
      {
        <>
          <Page size="FOLIO" style={styles.page}>
            <View style={styles.header}>
              
              <View style={styles.head}>
                <View>
                  <Text>FlexWork</Text>
                </View>
                <View >
                  <Text>Estadisticas</Text>
                </View>
              </View>
            </View>
            <View >
              <View style={styles.group}>
                <Text style={styles.subtitle}>
                  <Text style={styles.subtitle}>Ingresos totales:</Text>
                  <Text style={styles.negrita}>{ingresosTotaless}</Text>
                </Text>
              </View>
              <View style={styles.group}>
                <View>
                  <Text>
                    <Text style={styles.subtitle}>Total Reservaciones:</Text>
                    <Text style={styles.negrita}>{totalReservacioness}</Text>
                  </Text>
                </View>
                <View style={styles.group}>
                  <Text>
                    <Text style={styles.subtitle}>Total oficinas:</Text>
                    <Text style={styles.negrita}>{totalEspaciosTrabajos}</Text>
                  </Text>
                </View>
              </View>
            </View>
          </Page>

          <Page>
            <View style={styles.group}>
              <View>
                <Text>
                  <Text style={styles.subtitle}>
                    Oficinas con mejor rendimiento economico:
                  </Text>
                  {oficinasMejorRendimiento.map((ofiMejorRendimiento) => (
                    <View style={styles.group} key={ofiMejorRendimiento._id}>
                      <Text style={styles.negrita}>
                        {ofiMejorRendimiento.negrita}
                      </Text>
                    </View>
                  ))}
                </Text>
              </View>
            </View>
            <View style={styles.group}>
              <View style={styles.group}>
                <Text>
                  <Text style={styles.subtitle}>Oficinas mas reservadas: </Text>
                  {oficinasMasReservadas.map((ofiMasReservadas) => (
                    <View style={styles.group} key={ofiMasReservadas._id}>
                      <Text style={styles.negrita}>
                        {ofiMasReservadas.negrita}
                      </Text>
                    </View>
                  ))}
                </Text>
              </View>
              <View style={styles.group}>
                <Text>
                  <Text style={styles.subtitle}>
                    Oficinas con peor rendimiento economico:
                  </Text>
                  {oficinasPeorRendimiento.map((ofiPeorRendimiento) => (
                    <View style={styles.group} key={ofiPeorRendimiento._id}>
                      <Text style={styles.negrita}>
                        {ofiPeorRendimiento.title}
                      </Text>
                    </View>
                  ))}
                </Text>
              </View>
            </View>
          </Page>
        </>
      }
    </Document> */
