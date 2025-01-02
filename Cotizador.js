//(function (global) {
//    var _hash = "!";
//    var noBackPlease = function () {
//        if (global.location.href.indexOf("?") < 0) {
//            global.location.href += "#";
//        } else {
//            global.location.href += "&#";
//        }

//        global.location.href += "#";
//        global.setTimeout(function () {
//            global.location.href += "!";
//        }, 50);
//    };
//    global.onhashchange = function (){ 
//        if (global.location.hash !== _hash) {
//            global.location.hash = _hash;            
//            $("[name=BtnCambiar][value=Anterior]:visible").trigger("click");
//        }
//    };
//    noBackPlease();
//})(window);

var Cotizador = {
    Parametros: {
        cLlave: "",
        DataGuide: "",
        nIdNegocio: 0,
        nIdNegocioGrupo: 0,
        nTipoCotizador: 0,
        nIdNegocioPlanes: "",
        nRecargoMin: 0,
        nRecargoMax: 0,
        nDescuento: 0,
        nDescuento2: 0,
        GeoLatitud: 0,
        GeoLongitud: 0,
        Mensaje: "",
        nValorMaximo: 0,
        nAutorizado: 0,
        nAdaptaciones: 0,
        nNoAdaptaciones: 0,
        nEquipoEspecial: 0,
        nNoEquipoEspecial: 0,
        nFactura: 0,
        nConvenido: 0,
        arrClientes: [],
        Poliza: "",
        nValorVehiculo: 0,
        nPorcentajeAdaptaciones: 0,
        nPorcentajeEquipoEspecial: 0,
        nMaxCasco: 0,
        nMaxVest: 0,
        ccAgente: "",
        nIniciar: 0,
        bDisponibilidad: false,
        cPSISEPlan: "",
        cAgente: "",
        nNivel: 0,
        bCotizar: false,
        cAgrupador: "",
        bCorLog: false,
        bMenuSup: false,
        cMensajeLegal: "",
        nBeneficiarios: 1,
        cLlaveGrupoNegocio: "",
        cTipoCarga: "",
        bSegCot: false,
        cCorregoAgente: "",
        nLimInfUTP: 0,
        cLimInfUTP: "",
        tokencotcheck: "",
        cPromoMSI: "",
        TipoTarjeta: "",
        Msi: false,
        nPrimerPago: "",
        cNumPagos: "",
        nSubsecuentes: "",
        bPuedeCotizar: false,
        bMultiFormaPago: "",
        cValorConvenidoMotos: "1",
        bPermiteCotizar: true,
        bRenovacion: false,
        cNegocioEspRena: "",
        cTipoValorRena: "",
        nPlanRena: "",
        nDerechoRena: "",
        bTextoABC: "",
        nValorMinimoMoto: 0,
        nValorMaximoMoto: 0,
        //[Proyecto IFV]
        bMostrarIFV: "",
        legfront_chocolate: false,
        //RC USA
        MostrarRCUSA: false,
        RCUSAObligatoria: false,
        //[CotEmi Guerrero]
        bRecuperaGuerrero: false,
        cSerieGuerrero: "",
        //[Tipos Indemnizacion]
        nValorPivoteVF: 0,
        nlimInferiorVF: 0,
        nlimSuperiorVF: 0,
        bPermiteCapturaSAVF: false,
        bExisteVF: false,
        nValorPivoteVC: 0,
        nlimInferiorVC: 0,
        nlimSuperiorVC: 0,
        bPermiteCapturaSAVC: false,
        bExisteVC: false,
        nDepreciacionUso: 0,
        //[Proyecto GPS]
        bMostrarGPS: "",
        //[Proyecto Deducibles min y restricciones]
        bCotRestringida: "",
        bDedMin: "",
        nMinRT: 0,
        nMinDM: 0,
        cCifMinRT: "",
        cCifMinDM: "",
        bCheckSitioCor: false,
        nLimSupUTP: 0,
        cLimSupUTP: ""
    },
    Iniciar: function (cLlaveGrupoNegocio, cIniciar) {
        // var year = new Date().getFullYear();
        // var x = document.getElementsByClassName("txtCopyright");
        // x[0].innerHTML = "© ANA SEGUROS, Derechos Reservados " + year + ".";
        Cotizador.Parametros.cLlave = ASHT.GetUrlParam("cLlave")[0];
        Cotizador.Parametros.bRecuperaGuerrero = ASHT.GetUrlParam("RecGro")[0];
        Cotizador.Parametros.nIniciar = cIniciar;
        Cotizador.Parametros.cLlaveGrupoNegocio = cLlaveGrupoNegocio;
        var validacion = true;
        if (cLlaveGrupoNegocio == "a789e5b0a3c940908ec5f74153b50418" || cLlaveGrupoNegocio == "438ae5545452484f8c4b4aa9a1847be2") {
            $.ajax({
                type: 'POST',
                url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                data: {
                    servicio: 'ValidaToken',
                    ctokentec: ASHT.GetUrlParam("tokentec")[0],
                    ccAgente: ""
                },
                success: function (data) {
                    jQuery.globalEval(data);
                },
                timeout: 50000,
                dataType: "text",
                async: false
            });

            validacion = val;
        }

        if (validacion) {


            var HTML = "";
            //Cotizador 
            if (cLlaveGrupoNegocio != "205cb81b52684a608ffff9d74e1ea159") {
                HTML += '<div id="DvSupCor">';
                HTML += '   <div class="bodyLogin" style="display:none" style="top: 130px; left: 968px;">';
                HTML += '       <div class="boxLogin">';
                HTML += '           <div class="ttCerrar">x</div>';
                HTML += '           <div class="ttLogin"><img src="img/ico_ttLogin.png" width="19" height="19" alt="">USUARIO</div>'
                HTML += '           <input id="TxtUsuarioSup" type="text" class="inputLogin Requerido2" placeholder="USUARIO">'
                HTML += '           <div id="BtnSuplantar" class="btnEntrar">SUPLANTAR</div>'
                HTML += '           <div class="sepGris"></div>';
                HTML += '           <div id="BtnCancelarSup" class="linkLogin">Cancelar suplantación</div>';
                HTML += '       </div>';
                HTML += '   </div>';
                HTML += '</div>';

                if (ASHT.GetUrlParam("tokencor")[0] != "") {
                    HTML += '<div id="DvPoliza" style="display:none"></div>';
                    HTML += '<div id="DvReportes" style="display:none"></div>';
                    HTML += '<div id="DvCotizaciones" style="display:none"></div>';
                    HTML += '<div id="DvUsuariosCor" style="display:none"></div>';
                    HTML += '<div id="DvReprogramarCor" style="display:none"></div>';
                }
            }
            HTML += '<div id="DvResultadoR" style="display:none"></div>';
            HTML += '<div id="FrmCotizar" name="Formulario">';
            HTML += '   <div id="DvCorActivacion" style="display:none;">';
            HTML += '       <div class="ttSeccion f1 animate">Activación de cuenta</div>';
            HTML += '       <div class="f1 stack animate">';
            HTML += '           <div id="MensajeCorAct" class="one">';
            HTML += '               <p>Su usuario ha sido activado con las siguientes caracteristicas: <p>';
            HTML += '               <p>Nombre: <label id="ActCorNombre"></label> <p>';
            HTML += '               <p>Usuario: <label id="ActCorUsuario"></label> <p>';
            HTML += '               <p>Contraseña: <label id="ActCorPassword"></label><p>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';
            HTML += '       <div class="f1 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <input class="btnCotizador" type="button" value="Iniciar sesión" id="BtnCorReload"/>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';
            HTML += '   </div>';
            HTML += '   <div id="DvLogMicrositios" style="display:none;">';
            HTML += '       <div class="ttSeccion f1 animate">Log In</div>';
            HTML += '       <div class="f1 stack animate">';
            HTML += '           <div class="centrar">';
            HTML += '               <input id="TxtUsuarioMic" class="inputTxtAjustable" placeholder="Usuario" type="text" />';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';
            HTML += '       <div class="f1 stack animate">';
            HTML += '           <div class="centrar">';
            HTML += '               <input id="TxtPassMic" class="inputTxtAjustable" placeholder="Contraseña" type="password" />';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';
            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one centrar">';
            HTML += '               <span type="button" class="btnCotizador" id="BtnRegistroCor" style="cursor:pointer;display:none">Registro</span>';
            HTML += '           </div>';
            HTML += '           <div class="two centrar" >';
            HTML += '               <span type="button" class="btnCotizador" id="BtnRecuperaCor" style="cursor:pointer;display:none">Recuperar contraseña</span>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';
            HTML += '       <div class="f1 animate">';
            HTML += '           <div class="centrar">';
            HTML += '               <input class="btnCotizador" type="button" id="BtnEntraMic" value="Entrar" />';
            HTML += '           </div>';
            HTML += '       </div>';
            HTML += '   </div>';

            HTML += '   <div id="DvRecuperaCor" style="display:none;">';
            HTML += '       <div class="ttSeccion f1 animate">Recuperación de contraseña</div>';
            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">Escriba su usuario y e-mail con los que se registro, se le enviaran sus datos a su correo</label>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';
            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* E-mail</label>';
            HTML += '                   <input id="TxtCorreoRecuperaCor" type="text" class="inputTxtAjustable Requerido numerosletras" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';
            HTML += '       <div class="f1 animate">';
            HTML += '           <div class="centrar">';
            HTML += '               <input class="btnCotizador" type="button" id="BtnRecuperaEnvio" value="Enviar correo" /><input class="btnCotizador" type="button" id="BtnRegresarRec" value="Regresar" />';
            HTML += '           </div>';
            HTML += '       </div>';
            HTML += '   </div>';

            HTML += '   <div id="DvRegistroCor" style="display:none;">';
            HTML += '       <div class="ttSeccion f1 animate">Registro</div>';
            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Nombre</label>';
            HTML += '                   <input id="TxtNombreCor" type="text" class="inputTxtAjustable Requerido numerosletras" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta" id="LblUsuarioCor">* E-mail</label>';
            HTML += '                   <input id="TxtCorreoCor" type="text" class="inputTxtAjustable Requerido numerosletras" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Contraseña</label>';
            HTML += '                   <input id="TxtPasswordCor" type="password" class="inputTxtAjustable Requerido numerosletras" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Confirma Contraseña</label>';
            HTML += '                   <input id="TxtConfirmaCor" type="password" class="inputTxtAjustable Requerido numerosletras" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Agrupador</label>';
            HTML += '                   <select class="selectAjustable Requerido" id="CmbCorAgrupador"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Código de promoción</label>';
            HTML += '                   <input id="TxtCodigoCor" type="text" class="inputTxtAjustable Requerido numerosletras" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div id="DvCorNiveles"></div>';

            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* ¿Puede Emitir?</label>';
            HTML += '                   <select class="selectAjustable Requerido" id="CmbCorPermisoEmision">';
            HTML += '                       <option value="0">--Seleccionar--</option>';
            HTML += '                       <option value="1">SI</option>';
            HTML += '                       <option value="2">NO</option>';
            HTML += '                   </select >';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f1 animate">';
            HTML += '           <div class="centrar">';
            HTML += '               <input class="btnCotizador" type="button" id="BtnRegistrarCor" value="Registrar" /><input class="btnCotizador" type="button" id="BtnRegresarCor" value="Regresar" />';
            HTML += '           </div>';
            HTML += '       </div>';
            HTML += '   </div>';

            HTML += '   <div id="FrmTipoCotizador">';
            HTML += '       <div class="ttSeccion f1 animate">Elige el tipo de cotizador</div>';
            if (cLlaveGrupoNegocio == "a789e5b0a3c940908ec5f74153b50418") {
                HTML += '       <div class="f1 stack animate">';
                HTML += '           <div class="one">';
                HTML += '               <div class="boxSelectCotizador">';
                HTML += '                  <input id="BtnCliente" class="btnCotizador" type="button" value="YA SOY CLIENTE">';
                HTML += '               </div>';
                HTML += '           </div>';
                HTML += '           <div class="limpiar"></div>';
                HTML += '       </div>';
            }
            HTML += '       <div id="BtnCotizadores"></div>';
            HTML += '       <div class="f1 stack animate" style="display:none">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Tipo Cotizador:</label>';
            HTML += '                   <select class="selectAjustable Requerido" id="CmbTipoCotizador" name="nTipoCotizador"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';
            HTML += '       <div class="f1 animate" style="display:none">';
            HTML += '           <input id="BtnIniciar" class="btnCotizador" type="button" value="Siguiente" name="BtnCambiar" actual="FrmTipoCotizador" siguiente="FrmAuto">';
            HTML += '       </div>';
            HTML += '   </div>';

            HTML += '   <div id="FrmAuto" style="display:none">';
            HTML += '     <div id="FrmAutoGral" style="display:none">';
            HTML += '       <div class="ttSeccion f1b animate">Búsqueda rápida</div>';
            HTML += '       <div class="f1 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">Busca tu auto por descripción:</label>';
            HTML += '                   <input id="TxtBuscaVehiculo" class="inputTxtAjustable" placeholder="Ej. Año, marca, submarca o versión" type="text" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="separador"></div>';
            HTML += '       <div class="ttSeccion f1b animate">Búsqueda específica</div>';
            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Tipo vehículo</label>';
            HTML += '                   <select class="selectAjustable Requerido" name="nCategoria" id="CmbTipoVehiculo" nguardar="1" nTipo="1" cCombo="[name=nModelo]"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two" id="FrmPasaje" style="display:none">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta" id="LblValorFactura2">* Valor Convenido</label>';
            HTML += '                   <input id="TxtValorFactura2" class="inputTxtAjustable Requerido numeros formatoprimas" type="text" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two" id="FrmTesla" style="display:none">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta" id="LblValorFactura3">* Valor Convenido</label>';
            HTML += '                   <input id="TxtValorFactura3" class="inputTxtAjustable Requerido numeros formatoprimas" type="text" />';
            HTML += '               </div>';
            HTML += '           </div>';

            //En esta pasrte se están dando de alta los inputs para la parte de tractos
            // - Tengo la idea que falta el de adaptaciones, aunque no se como se estaria enviando en las cotizaciones y emisiones (en el XML)
            // - Al parecer se envian en las coberturas con id 16 y 17 (DM y RT)
            HTML += '           <div class="two" id="FrmTractos" style="display:none">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta" id="LblValorFactura4">* Valor Convenido</label>';
            HTML += '                   <input id="TxtValorFactura4" class="inputTxtAjustable Requerido numeros formatoprimas" type="text" />';
            HTML += '               </div>';

            //HTML += '               <div class="boxSelectCotizador">';
            //HTML += '                   <label class="txtEtiqueta" id="LblValorAdaptacion">* Valor Adaptacion</label>';
            //HTML += '                   <input id="TxtValorFactura5" class="inputTxtAjustable Requerido numeros formatoprimas" type="text" />';
            //HTML += '               </div>';
            HTML += '           </div>';

            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Año o modelo</label>';
            HTML += '                   <select class="selectAjustable Requerido" name="nModelo" id="CmbModelo" nguardar="1" nTipo="1" cCombo="#CmbMarca"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Marca</label>';
            HTML += '                   <select class="selectAjustable Requerido" name="cMarca" id="CmbMarca" nguardar="1" nTipo="1" cCombo="#CmbSubMarca"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate" id="DvGeneral">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Submarca</label>';
            HTML += '                   <select class="selectAjustable Requerido" name="cSubMarca" id="CmbSubMarca" nguardar="1" nTipo="1" cCombo="#CmbVersion"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Versión</label>';
            HTML += '                   <select class="selectAjustable Requerido" name="cVersion" id="CmbVersion" nguardar="1" nTipo="1"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate" id="DvDescripcion" style="display:none">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Descripción Vehículo</label>';
            HTML += '                   <input id="TxtVehiculoGral" name="cDescripcion" class="inputTxtAjustable Requerido numerosletras" type="text" nGuardar="1" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';
            HTML += '     </div>';

            HTML += '     <div id="FrmMoto" style="display:none">';

            HTML += '       <div class="ttSeccion f1b animate">Búsqueda rápida</div>';
            HTML += '       <div class="f1 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">Busca tu auto por descripción:</label>';
            HTML += '                   <input id="TxtBuscaMoto" class="inputTxtAjustable" placeholder="Ej. Año, marca, submarca o versión" type="text" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="ttSeccion f1b animate">Búsqueda específica</div>';
            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Año o modelo</label>';
            HTML += '                   <select class="selectAjustable Requerido" name="nModelo" id="CmbModeloM" nguardar="1" nTipo="1" cCombo="#CmbMarcaMoto"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Marca</label>';
            //HTML += '                   <select class="selectAjustable Requerido" name="cMarca" id="CmbMarcaMoto" nguardar="1" ></select>';
            HTML += '                   <select class="selectAjustable Requerido" name="cMarca" id="CmbMarcaMoto" nguardar="1" nTipo="1" cCombo="#CmbCarroceriaMoto"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Tipo o propósito</label>';
            HTML += '                   <select class="selectAjustable Requerido" name="idCarroceria" id="CmbCarroceriaMoto" nguardar="1" nTipo="1" cCombo="#CmbSubMarcaMoto"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Familia</label>';
            HTML += '                   <select class="selectAjustable Requerido" name="cSubMarca" id="CmbSubMarcaMoto" nguardar="1" nTipo="1" cCombo="#CmbVersionMoto"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Versión</label>';
            HTML += '                   <select class="selectAjustable Requerido" name="cVersion" id="CmbVersionMoto" nguardar="1" nTipo="1"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            //HTML += '       <div class="f2 stack animate">';
            //HTML += '           <div class="one">';
            //HTML += '               <div class="boxSelectCotizador">';
            //HTML += '                   <label class="txtEtiqueta">* Submarca</label>';
            //HTML += '                   <select class="selectAjustable Requerido" name="cSubMarca" id="CmbSubMarcaMoto" nguardar="1" nTipo="1" cCombo="#CmbVersionMoto"></select>';
            //HTML += '               </div>';
            //HTML += '           </div>';
            //HTML += '           <div class="two">';
            //HTML += '               <div class="boxSelectCotizador">';
            //HTML += '                   <label class="txtEtiqueta">* Versión</label>';
            //HTML += '                   <select class="selectAjustable Requerido" name="cVersion" id="CmbVersionMoto" nguardar="1" nTipo="1"></select>';
            //HTML += '               </div>';
            //HTML += '           </div>';
            //HTML += '           <div class="limpiar"></div>';
            //HTML += '       </div>';

            HTML += '       <div class="f2 stack animate" id="DvDescripcion" style="display:none">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Descripción Vehículo</label>';
            HTML += '                   <input id="TxtVehiculoGral" name="cDescripcion" class="inputTxtAjustable Requerido numerosletras" type="text" nGuardar="1" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate" style="display:none">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Descripción Vehículo</label>';
            HTML += '                   <input id="TxtVehiculo" name="cDescripcion" class="inputTxtAjustable Requerido numerosletras" type="text" nGuardar="1" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two" id="DivValorCMoto" style="display:none">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta" id="LblValorFactura">* Valor Convenido</label>';
            HTML += '                   <input id="TxtValorFactura4" class="inputTxtAjustable Requerido numeros formatoprimas" type="text" />';
            HTML += '               </div>';
            HTML += '           </div>';
            if (cLlaveGrupoNegocio == "9aed4de70eca4667b947e61f939e9550") {
                HTML += '           <div class="two">';
                HTML += '               <div class="boxSelectCotizador">';
                HTML += '                   <label class="txtEtiqueta" id="LblTextoEsp">LA PRESENTE PÓLIZA TIENE UNA VIGENCIA POR 30 DÍAS, AL TERMINAR PUEDES CONTRATAR POR 30 DÍAS MÁS A TRAVÉS DEL PORTAL DE NO FRONTERAS NO LIMITES O <b><u>SI DESEAS UNA COBERTURA MÁS AMPLIA</u></b> CONTACTARNOS AL 55 54 19 06 95</label>';
                //HTML += '                   <input id="TxtValorFactura" class="inputTxtAjustable Requerido numeros formatoprimas" type="text" />';
                HTML += '               </div>';
                HTML += '           </div>';
            }
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';
            HTML += '     </div>';

            HTML += '     <div id="FrmMotoGenerica" style="display:none">';

            HTML += '       <div class="ttSeccion f1b animate">Búsqueda específica</div>';
            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Año o modelo</label>';
            HTML += '                   <select class="selectAjustable Requerido" name="nModelo" id="CmbModeloMGen" nguardar="1" nTipo="1" cCombo="#CmbMarcaMotoGen"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Marca</label>';
            HTML += '                   <select class="selectAjustable Requerido" name="cMarca" id="CmbMarcaMotoGen" nguardar="1" nTipo="1" cCombo="#CmbVersionMotoGen"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Versión</label>';
            HTML += '                   <select class="selectAjustable Requerido" name="cVersion" id="CmbVersionMotoGen" nguardar="1" nTipo="1"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Descripción Vehículo</label>';
            HTML += '                   <input id="TxtVehiculoMotoGen" name="cDescripcion" class="inputTxtAjustable Requerido numerosletras" type="text" nGuardar="1" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta" id="LblValorFactura">* Valor Convenido</label>';
            HTML += '                   <input id="TxtValorFactura" class="inputTxtAjustable Requerido numeros formatoprimas" type="text" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';
            HTML += '     </div>';

            HTML += '     <div id="FrmFronLeg" style="display:none">';
            HTML += '       <div class="ttSeccion f1b animate">Cotización por número de serie o precio.</div>';
            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <input id="ChkSeriePrecio" type="checkbox" data-switch-left="Serie" data-switch-right="Precio" value="0" name="nSeriePrecio" />';
            HTML += '                   <div class="limpiar"></div>';
            HTML += '                   <input id="TxtSerieFL" class="inputTxtAjustable numerosletras Requerido" name="cSerie"  type="text" />';
            HTML += '                   <input id="TxtSumaFL" class="inputTxtAjustable numeros formatoprimas Requerido" name="cSeriePrecio"  type="text" style="display:none"/>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Año o modelo</label>';
            HTML += '                   <select class="selectAjustable Requerido" name="nModelo" id="CmbModeloFL" nguardar="1" nTipo="1"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">Vehículo</label>';
            HTML += '                   <input id="TxtVehiculoFL" name="cDescripcion" class="inputTxtAjustable numerosletras" disabled type="text" nGuardar="1" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Tipo vehículo</label>';
            HTML += '                   <select id="CmbTipoVehiculoFL" class="selectAjustable Requerido" name="nCategoria" nguardar="1"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Tipo</label>';


            HTML += '<select class="selectAjustable Requerido" name="nTipoFronLeg" id="CmbTipoFronLeg" nguardar="1"><option value="0">--SELECCIONAR--</option><option value="1">FRONTERIZO</option><option value="2">LEGALIZADO</option></select>';


            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';

            HTML += '<div class="boxSelectCotizador" id="div_Salvamento">';
            HTML += '<label class="txtEtiqueta">Salvamento</label>';
            HTML += '<input id="ChkSalvamento" value="0" type="checkbox" nGuardar="1" name="nSalvamento"/>';


            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">Suma Asegurada</label>';
            HTML += '                   <input id="TxtSumaSS" name="SumaFL" class="inputTxtAjustable numeros formatoprimas Requerido" disabled type="text" />';
            HTML += '                   <input id="TxtSumaCS" name="SumaFL" class="inputTxtAjustable numeros formatoprimas" disabled type="text" style="display:none" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';
            HTML += '     </div>';

            HTML += '     <div id="FrmNivelada" style="display:none">';
            HTML += '       <div class="ttSeccion f1b animate">Búsqueda por número de serie.</div>';
            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta Requerido">* Serie</label>';
            HTML += '                   <input id="TxtSerieNivelada"  class="inputTxtAjustable numerosletras Requerido" name="cSerie" type="text" nGuardar="1" maxlength="17"/>';
            HTML += '                   <input class="btnCotizador" type="button" value="Buscar" id="BtnBuscarSerie" /><img src="../Images/ajax-loader.gif" style="display:none" id="ILoad4" width="25px"/>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Precio</label>';
            HTML += '                   <input id="TxtPrecioNivelada" type="text" disabled class="inputTxtAjustable numerosletras Requerido" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Año o modelo</label>';
            HTML += '                   <input id="TxtModeloNivelada" type="text" disabled class="inputTxtAjustable numerosletras Requerido" name="nModelo" nGuardar="1" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Vehículo</label>';
            HTML += '                   <input id="TxtVehículoNivelada" type="text" disabled class="inputTxtAjustable numerosletras Requerido" name="cDescripcion" nGuardar="1" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';
            HTML += '     </div>';

            HTML += '       <div class="f2 stack animate" name="TipoCarga" style="display:none">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">Tipo de Carga</label>';
            HTML += '                   <select class="selectAjustable Requerido" name="cTipoCarga" id="CmbTipoCarga" nguardar="1">';
            HTML += '                       <option value="0">--SELECCIONAR--</option>';
            HTML += '                       <option value="E">NO INCLUIR CARGA</option>';
            HTML += '                       <option value="A">CARGA A - NO PELIGROSA</option>';
            HTML += '                       <option value="B">CARGA B - PELIGROSA</option>';
            //HTML += '                       <option value="C">CARGA C - ALT PELIGROSA</option>';
            HTML += '                   </select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">Descripción Carga</label>';
            HTML += '                   <input id="TxtDescripcionCarga" name="cDescripcionCarga" type="text" class="inputTxtAjustable numerosletras" nGuardar="1" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one" name="DvUso">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Uso</label>';
            HTML += '                   <select class="selectAjustable Requerido" name="cUso" id="CmbUso" nguardar="1"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two" name="DvServicio" >';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Servicio</label>';
            HTML += '                   <select class="selectAjustable Requerido" name="cServicio" id="CmbServicio" nguardar="1"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate" name="Dispositivo" style="display:none">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">Dispositivo satelital</label>';
            HTML += '                   <select class="selectAjustable" name="cDispositivo" id="CmbDispositivo" nguardar="1"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two"></div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate" name="FinVigencia" style="display:none">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">Inicio de Vigencia</label>';
            HTML += '                   <input class="inputTxtAjustable numerosletras" type="text" name="cInicioVigencia" id="TxtInVigencia" nguardar="1" readonly="readonly"/>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">Fin de Vigencia</label>';
            HTML += '                   <input class="inputTxtAjustable numerosletras" type="text" name="TxtFinVigencia" disabled nguardar="1" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div name="DvCamposExtra"></div>';
            HTML += '       <div class="f1 animate">';
            HTML += '           <div class="centrar">';
            HTML += '           <input class="btnCotizador" type="button" value="Anterior" name="BtnCambiar" actual="FrmAuto" siguiente="FrmTipoCotizador">';
            HTML += '           <input class="btnCotizador" type="button" value="Siguiente" name="BtnCambiar" actual="FrmAuto" id="BtnEstado" siguiente="FrmEstado">';
            HTML += '           </div>';
            HTML += '       </div>';
            HTML += '   </div>';

            HTML += '   <div id="FrmEstado" style="display:none">';
            HTML += '       <div class="ttSeccion f1b animate">Búsqueda rápida</div>';
            HTML += '       <div class="f1 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">Busca tu municipio por código postal:</label>';
            HTML += '                   <input id="TxtBuscaCP" class="inputTxtAjustable numeros" type="text" placeholder="Ej. 09200" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="separador"></div>';
            HTML += '       <div class="ttSeccion f1b animate">Búsqueda específica</div>';
            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Estado</label>';
            HTML += '                   <select class="selectAjustable Requerido" name="cEstado" id="CmbEstado" nguardar="1" nTipo="1" cCombo="#CmbMunicipio"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Municipio</label>';
            HTML += '                   <select class="selectAjustable Requerido" name="cMunicipio" id="CmbMunicipio" nguardar="1" nTipo="1" cCombo="#cCodigo"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="separador"></div>';
            HTML += '       <div class="ttSeccion f1b animate" name="DvVigencia">Vigencia, forma de pago y descuento</div>';
            HTML += '       <div class="f2 stack animate" name="DvVigencia">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Vigencia</label>';
            HTML += '                   <select class="selectAjustable Requerido" name="cVigencia" id="CmbVigencia" nguardar="1" nTipo="1" cCombo="[name=cMetodoPago]" ></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Forma de pago</label>';
            HTML += '                   <select class="selectAjustable Requerido" name="cMetodoPago" id="CmbMetodoPago" nguardar="1"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate" name="DerechoAd" style="display:none">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Derecho Adicional</label>';
            HTML += '                   <select class="selectAjustable" name="nDerecho" id="CmbDerecho" nguardar="1"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador" name="DvDescuento">';
            HTML += '                   <input id="ChkRecargo" name="nRecargo" value="0" type="checkbox" data-switch-left="Descuento" data-switch-right="Recargo" nguardar="1" />';
            HTML += '                   <div class="limpiar"></div>';
            HTML += '                   <input class="inputTxtAjustable Requerido numeros" type="text" id="TxtDescuento" maxlength="5" name="nDescuento"  nguardar="1" value="0" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two" name="ValorFactura">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <table>';
            HTML += '                       <tr>';
            HTML += '                           <td><input type="checkbox" id="ChkValorFactura" nGuardar="1" name="nValorFactura" value="0" /></td>';
            HTML += '                           <td><label for="ChkValorFactura" style="cursor:pointer;" class="txtEtiqueta" id="LblValorFactura">Valor Factura</label></td>';
            HTML += '                       </tr>';
            HTML += '                   </table>';
            //[Tipos Indemnizacion]
            HTML += '                   <table id="TblInputVF" style="display: none;">';
            HTML += '                       <tr>';
            HTML += '                           <td><label class="txtEtiqueta" >* Suma Asegurada</label></td>';
            HTML += '                           <td><input class="inputTxtAjustable Requerido numeros" type="text" id="TxtVFSA" tipoValor="VF" name="SumaAseguradaVeh"/></td>';
            HTML += '                       </tr>';
            HTML += '                   </table>';
            HTML += '                   <div class="limpiar"></div>';
            HTML += '               </div>';
            HTML += '           </div>';

            HTML += '           <div class="two" name="ValorConvenido">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <table>';
            HTML += '                       <tr>';
            HTML += '                           <td><input type="checkbox" id="ChkValorConvenido" nGuardar="1" name="nValorConvenido" value="0" /></td>';
            HTML += '                           <td><label for="ChkValorConvenido" style="cursor:pointer;" class="txtEtiqueta" id="LblValorConvenido" >Valor Convenido</label></td>';
            HTML += '                       </tr>';            
            HTML += '                   </table>';
            //[Tipos Indemnizacion]
            HTML += '                   <table id="TblInputVC" style="display: none;">';
            HTML += '                       <tr>';
            HTML += '                           <td><label class="txtEtiqueta" >* Suma Asegurada</label></td>';
            HTML += '                           <td><input class="inputTxtAjustable Requerido numeros" type="text" id="TxtVCSA" tipoValor="VC" name="SumaAseguradaVeh"/></td>';
            HTML += '                       </tr>';
            HTML += '                   </table>';
            HTML += '                   <div class="limpiar"></div>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one" name="ABCSinTipoCarga" style="display: none;">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <table>';
            HTML += '                       <tr>';
            HTML += '                           <td><input type="checkbox" id="ChkTextoABC" nGuardar="1" value="0" /></td>';
            HTML += '                           <td><label for="ChkTextoABC" style="cursor:pointer;" class="txtEtiqueta" >Tipo de Carga pendiente.</label></td>';
            HTML += '                       </tr>';
            HTML += '                   </table>';
            HTML += '                   <div class="limpiar"></div>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two" name="MultiFormaPago" style="display: none;">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <table>';
            HTML += '                       <tr>';
            HTML += '                           <td><input type="checkbox" id="ChkMultiFormaPago" nGuardar="1" value="0" /></td>';
            HTML += '                           <td><label for="ChkMultiFormaPago" style="cursor:pointer;" class="txtEtiqueta" >Imprimir cotización con todas las formas de pago</label></td>';
            HTML += '                       </tr>';
            HTML += '                   </table>';
            HTML += '                   <div class="limpiar"></div>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            $.ajax({
                type: 'POST',
                url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                data: {
                    servicio: 'ActivarSegCotMS',
                    cLlaveGrupoNegocio: Cotizador.Parametros.cLlaveGrupoNegocio
                },
                success: function (data) {
                    jQuery.globalEval(data);
                    if (Cotizador.Parametros.bSegCot) {
                        HTML += '       <div class="separador"></div>';
                        HTML += '       <div class="ttSeccion f1b animate">Datos del cliente</div>';
                        HTML += '       <div class="f2 stack animate">';
                        HTML += '           <div class="one">';
                        HTML += '               <div class="boxSelectCotizador">';
                        HTML += '                   <label class="txtEtiqueta">* Nombre</label>';
                        HTML += '                   <input id="TxtNombreCliente" name="cNombreCliente" type="text" class="inputTxtAjustable numerosletras Requerido" maxlength="50"/>';
                        HTML += '               </div>';
                        HTML += '           </div>';
                        HTML += '           <div class="two">';
                        HTML += '               <div class="boxSelectCotizador">';
                        HTML += '                   <label class="txtEtiqueta">* Telefono</label>';
                        HTML += '                   <input class="inputTxtAjustableMedio Requerido numeros" type="text" name="cTelefono" id="cTelefonoDatos" maxlength="10">';
                        HTML += '               </div>';
                        HTML += '           </div>';
                        HTML += '           <div class="limpiar"></div>';
                        HTML += '       </div>';
                        HTML += '       <div class="f2 stack animate">';
                        HTML += '           <div class="one">';
                        HTML += '               <div class="boxSelectCotizador">';
                        HTML += '                   <label class="txtEtiqueta">* E-mail</label>';
                        HTML += '                    <input class="inputTxtAjustable Requerido numerosletras" type="text" name="cCorreo" id="cCorreoDatos" nguardar="1"  maxlength="50">';
                        HTML += '               </div>';
                        HTML += '           </div>';
                        HTML += '           <div class="two" id="div_campoAdicional">';
                        HTML += '           </div>';
                        HTML += '           <div class="limpiar"></div>';
                        HTML += '       </div>';
                    }
                },
                timeout: 0,
                dataType: "text",
                async: false
            });

            HTML += '       <div name="DvCamposExtra"></div>';
            HTML += '       <div class="f1 animate">';
            HTML += '           <div class="centrar">';
            HTML += '           <input class="btnCotizador" type="button" value="Anterior" name="BtnCambiar" actual="FrmEstado" siguiente="FrmAuto" />';
            HTML += '           <input class="btnCotizador" type="button" value="Cotizar" name="BtnCambiar" actual="FrmEstado" siguiente="FrmPlan" id="BtnCotizar" />';
            HTML += '           </div>';
            HTML += '       </div>';
            HTML += '   </div>';

            HTML += '   <div id="FrmPlan" style="display:none" name="Formulario">';
            HTML += '       <div class="ttSeccion f1b animate">Modifica la vigencia, forma de pago y descuento</div>';
            HTML += '       <div class="f3 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                  <label class="txtEtiqueta">* Vigencia</label>';
            HTML += '                  <select class="selectAjustable Requerido" name="cVigencia" id="CmbVigenciaPlan2" nguardar="1"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '              <div class="boxSelectCotizador">';
            HTML += '                 <label class="txtEtiqueta">* Forma de pago</label>';
            HTML += '                 <select class="selectAjustable Requerido" name="cMetodoPago" id="cMetodoPago2" nguardar="1"></select>';
            HTML += '              </div>';
            HTML += '           </div>';
            HTML += '           <div class="three">';
            HTML += '               <div class="boxSelectCotizador" name="DvDescuento">';
            HTML += '                   <label id="LblDescuento" class="txtEtiqueta">Descuento</label>';
            HTML += '                   <input class="inputTxtAjustable Requerido numeros" type="text" id="TxtDescuento2" name="nDescuento" nguardar="1" value="0" maxlength="5">';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate" name="DerechoAd" style="display:none">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Derecho Adicional</label>';
            HTML += '                   <select class="selectAjustable" name="nDerecho" id="CmbDerecho2" nguardar="1"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="centrar">';
            HTML += '        	<input class="btnCotizador" type="button" value="Cotizar" id="BtnCotizar2" style="display:none">';
            HTML += '           <input class="btnCotizador" type="button" value="Guardar" id="BtnDialogGuardar" />';
            HTML += '           <div class="limpiar"></div>';
            HTML += '           </div>';
            HTML += '       </div>';
            HTML += '       <div class="ttSeccion f1b animate">Selecciona uno de nuestros planes</div>';
            HTML += '       <div id="DvCotizacion"></div>';

            HTML += '       <div name="DvCamposExtra"></div>';

            //EMISION GUERRERO
            HTML += '<div class="f2 stack animate"><div class="centrar"><div class="limpiar"></div></div></div>';            
            
            HTML += '       <div id="DvClienteGuerrero" style="display:none" class="f2 stack animate">';
            HTML += '   <div class="centrar">';
            HTML += '       <label class="txtEtiquetaPago" style="text-align:left;">¡Estás a un paso de emitir! <br>En caso de querer emitir la presente cotización, A.N.A.Compañía de Seguros S.A.de C.V.deberá realizar una Inspección Física Vehicular, la cual consiste en la toma y carga de una serie de fotografías realizadas por el cliente en cualquier día y hora hábil mediante plataformas digitales o con la asesoría de personal debidamente autorizado por A.N.A.Compañía de Seguros S.A.de C.V.</label>'
            HTML += '   </div>';
            HTML += '   <div class="centrar">';
            HTML += '       <label class="txtEtiquetaPago" style="text-align:left;">Para cumplir con este proceso, es indispensable realizar el llenado y envío de los siguientes datos:</label>'
            HTML += '   </div>';
            HTML += '           <div class="ttSeccion f1b animate">Datos del cliente</div>';
            HTML += '           <div class="f2 stack animate">';
            HTML += '               <div class="one">';
            HTML += '                   <div class="boxSelectCotizador">';
            HTML += '                       <label class="txtEtiqueta">* Nombre</label>';
            HTML += '                       <input id="TxtNombreCliente" name="cNombreClienteG" type="text" class="inputTxtAjustable numerosletras Requerido" maxlength="50"/>';
            HTML += '                   </div>';
            HTML += '               </div>';
            HTML += '               <div class="two">';
            HTML += '                   <div class="boxSelectCotizador">';
            HTML += '                       <label class="txtEtiqueta">* E-mail</label>';
            HTML += '                       <input class="inputTxtAjustable Requerido numerosletras" type="text" name="cCorreo" id="cCorreoDatosG"  maxlength="50">';            
            HTML += '                   </div>';
            HTML += '               </div>';
            HTML += '               <div class="limpiar"></div>';
            HTML += '           </div>';
            HTML += '           <div class="f2 stack animate">';
            HTML += '               <div class="one">';
            HTML += '                   <div class="boxSelectCotizador">';
            HTML += '                       <label class="txtEtiqueta">* Telefono</label>';
            HTML += '                       <input class="inputTxtAjustableMedio Requerido numeros" type="text" name="cTelefono" id="cTelefonoDatosG" maxlength="10">';
            HTML += '                   </div>';
            HTML += '               </div>';
            HTML += '               <div class="limpiar"></div>';
            HTML += '           </div>';
            HTML += '           <div class="f2 stack animate">';
            HTML += '               <div class="one">';
            HTML += '                   <div class="boxSelectCotizador">';
            HTML += '                       <label class="txtEtiqueta">* Serie</label>';
            HTML += '                       <input class="inputTxtAjustable numerosletrassin Requerido" type="text" name="cSerie" id="TxtSerieCotG"  maxlength="17" />';
            HTML += '                   </div>';
            HTML += '               </div>';
            HTML += '               <div class="limpiar"></div>';
            HTML += '               <div class="f1 animate">';
            HTML += '                   <div class="centrar">';
            HTML += '                   <input class="btnCotizador" type="button" value="Enviar" id="BtnEviaCotG">';
            HTML += '                   </div>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '       </div>';
    
            HTML += '       <div class="f1 animate">';
            HTML += '           <div class="centrar">';
            HTML += '           <input class="btnCotizador" type="button" value="Anterior" name="BtnCambiar" actual="FrmPlan" siguiente="FrmEstado">';
            HTML += '           <input class="btnCotizador" type="button" value="Comprar" name="BtnCambiar" actual="FrmPlan" id="BtnComprar" siguiente="FrmContratante">';
            HTML += '           </div>';
            HTML += '       </div>';
            HTML += '   </div>';

            HTML += '   <div id="FrmContratante" style="display:none">';
            HTML += '       <div class="ttSeccion">Contratante</div>';
            HTML += '       <div class="f3 stack animate">';
            HTML += '           <div class="one" id="DvBuscarCliente">';
            HTML += '              <div class="boxSelectCotizador">';
            HTML += '                   <input class="btnCotizador" type="button" value="Buscar cliente" id="BtnDialogBuscar" />';
            HTML += '              </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '              <div class="boxSelectCotizador">';
            HTML += '                  <label class="txtEtiqueta">*Tipo de persona</label>';
            HTML += '                  <select class="selectAjustable" name="nTipoPersona" id="nTipoPersona" nGuardar="1" >';
            HTML += '                     <option value="1">FÍSICA</option>';
            HTML += '                     <option value="2">MORAL</option>';
            HTML += '                  </select>';
            HTML += '              </div>';
            HTML += '           </div>';
            HTML += '          <div class="three" id="DvRFC">';
            HTML += '            <div class="boxSelectCotizador">';
            HTML += '                 <label class="txtEtiqueta">* RFC</label>';
            HTML += '                 <input class="inputTxtAjustable Requerido numerosletras" type="text" name="cRFC" id="cRFC" nguardar="1"  maxlength="13">';
            HTML += '            </div>';
            HTML += '          </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';
            HTML += '       <div class="f3 stack animate" name="TipoPersona" nTipoPersona="1">';
            HTML += '          <div class="one">';
            HTML += '             <div class="boxSelectCotizador">';
            HTML += '                <label class="txtEtiqueta">* Nombre</label>';
            HTML += '                <input class="inputTxtAjustable Requerido numerosletras" type="text" name="cNombre" id="cNombre" nguardar="1"  maxlength="35">';
            HTML += '             </div>';
            HTML += '          </div>';
            HTML += '          <div class="two">';
            HTML += '            <div class="boxSelectCotizador">';
            HTML += '                <label class="txtEtiqueta">* Apellido paterno</label>';
            HTML += '                <input class="inputTxtAjustable Requerido numerosletras" type="text" name="cApaterno" id="cApaterno" nguardar="1"  maxlength="35">';
            HTML += '            </div>';
            HTML += '          </div>';
            HTML += '          <div class="three">';
            HTML += '            <div class="boxSelectCotizador">';
            HTML += '                <label class="txtEtiqueta">* Apellido materno</label>';
            HTML += '                <input class="inputTxtAjustable Requerido numerosletras" type="text" id="cAmaterno" name="cAmaterno"  nguardar="1"  maxlength="35">';
            HTML += '            </div>';
            HTML += '          </div>';
            HTML += '          <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f3 stack animate" name="TipoPersona" ntipopersona="2" style="display:none">';
            HTML += '          <div class="one">';
            HTML += '             <div class="boxSelectCotizador">';
            HTML += '                <label class="txtEtiqueta">* Empresa</label>';
            HTML += '                <input class="inputTxtAjustable numerosletras" type="text" name="cNombre" id="cEmpresa" nguardar="1"  >';
            HTML += '             </div>';
            HTML += '          </div>';
            HTML += '          <div class="two">';
            HTML += '             <div class="boxSelectCotizador">';
            HTML += '                <label class="txtEtiqueta">* Giro</label>';
            HTML += '                <select class="selectAjustable numerosletras" name="nGiro" id="nGiro" nguardar="1" ></select>';
            HTML += '             </div>';
            HTML += '          </div>';
            HTML += '          <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f3 stack animate">';
            HTML += '          <div class="one">';
            HTML += '             <div class="boxSelectCotizador">';
            HTML += '                <label class="txtEtiqueta">* E-Mail</label>';
            HTML += '                <input class="inputTxtAjustable Requerido numerosletras" type="text" name="cCorreo" id="cCorreo" nguardar="1"  maxlength="60">';
            HTML += '             </div>';
            HTML += '          </div>';
            HTML += '          <div class="two" style="display:none" name="ConfirmarCorreo">';
            HTML += '             <div class="boxSelectCotizador">';
            HTML += '                <label class="txtEtiqueta">*Confirmar E-Mail</label>';
            HTML += '                <input class="inputTxtAjustable Requerido numerosletras" type="text" name="cCorreo" id="cConfirmarCorreo" nguardar="1"  maxlength="60">';
            HTML += '             </div>';
            HTML += '          </div>';
            HTML += '          <div class="three">';
            HTML += '             <div class="boxSelectCotizador" name="TipoPersona" nTipoPersona="1">';
            HTML += '                <label class="txtEtiqueta">* Genero</label>';
            HTML += '                <select class="selectAjustable Requerido numerosletras" id="CmbSexo" name="nSexo" nguardar="1"><option value="0" selected>--SELECCIONAR--</option><option value="1">FEMENINO</option><option value="2">MASCULINO</option></select>';
            HTML += '             </div>';
            HTML += '          </div>';
            //    ************ DESARROLLO SEGURO DE VIDA NO NECESARIO
            //HTML += '          <div class="three" style="display:none" name="DvSexo">';
            //HTML += '             <div class="boxSelectCotizador">';
            //HTML += '                <label class="txtEtiqueta">* Sexo</label>';
            //HTML += '                <select class="selectAjustable numerosletras" id="CmbSexo"><option value="1">MASCULINO</option><option value="2">FEMENINO</option></select>';
            //HTML += '             </div>';
            //HTML += '          </div>';
            HTML += '          <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* ¿Desea cargar los datos fiscales para facturar?</label>';
            HTML += '                   <select class="selectAjustable numerosletras Requerido" name="cCargaDF" id="cCargaDF" nguardar="1"><option value="0" selected>--SELECCIONAR--</option><option value="S">SI</option><option value="N">NO</option></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate" style="display:none" name="DvDatosFiscales">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <table>';
            HTML += '                       <tr>';
            HTML += '                           <td><input type="checkbox" id="ChkClienteDF" nGuardar="1" name="cInfoIgualDF" value="0" /></td>';
            HTML += '                           <td><label for="ChkClienteDF" style="cursor:pointer;" class="txtEtiqueta" >¿Datos fiscales igual a información del contratante?</label></td>';
            HTML += '                       </tr>';
            HTML += '                   </table>';
            HTML += '                   <div class="limpiar"></div>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="ttSeccion" style="display:none" name="DvDatosFiscales">Datos Fiscales Para Facturación</div>';
            HTML += '       <div class="f3 stack animate" style="display:none" name="DvDatosFiscales">';
            HTML += '           <div class="one">';
            HTML += '              <div class="boxSelectCotizador">';
            HTML += '                 <label class="txtEtiqueta">* Nombre, Denominación o Razón Social</label>';
            HTML += '                 <input class="inputTxtAjustable Requerido" type="text" name="cRazonSocial" id="cRazonSocial" nguardar="1">';
            HTML += '              </div>';
            HTML += '           </div>';
            HTML += '          <div class="two">';
            HTML += '            <div class="boxSelectCotizador">';
            HTML += '                 <label class="txtEtiqueta">* RFC</label>';
            HTML += '                 <input class="inputTxtAjustable Requerido numerosletras" type="text" name="cRFCDF" id="cRFCDF" nguardar="1"  maxlength="13">';
            HTML += '            </div>';
            HTML += '          </div>';
            HTML += '           <div class="three">';
            HTML += '              <div class="boxSelectCotizador">';
            HTML += '                 <label class="txtEtiqueta">* Código Postal del domicilio fiscal</label>';
            HTML += '                 <input class="inputTxtAjustable Requerido solonumeros" type="text" name="cCPDF" id="cCPDF" nguardar="1" maxlength="5">';
            HTML += '              </div>';
            HTML += '           </div>';
            HTML += '          <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f3 stack animate" style="display:none" name="DvDatosFiscales">';
            HTML += '          <div class="one">';
            HTML += '             <div class="boxSelectCotizador">';
            HTML += '                <label class="txtEtiqueta">* Régimen Fiscal</label>';
            HTML += '                <select class="selectAjustable numerosletras Requerido" name="nRegimenDF" id="nRegimenDF" nguardar="1"></select>';
            HTML += '             </div>';
            HTML += '          </div>';
            HTML += '          <div class="two">';
            HTML += '             <div class="boxSelectCotizador">';
            HTML += '                <label class="txtEtiqueta">* E-Mail</label>';
            HTML += '                <input class="inputTxtAjustable Requerido numerosletras" type="text" name="cCorreoDF" id="cCorreoDF" nguardar="1"  maxlength="40">';
            HTML += '             </div>';
            HTML += '          </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f1 stack animate" style="display:none" name="DvDatosFiscales">';
            HTML += '          <div class="one" id="TextPMoral" style="display:none">';
            HTML += '             <div class="boxSelectCotizador">';
            HTML += '                <label class="txtEtiqueta">** Razón Social: no debe incluir el régimen de capital, por ejemplo:</label>';
            HTML += '                <label class="txtEtiqueta">"A.N.A. COMPAÑÍA DE SEGUROS S.A. DE C.V.", sino solo "A.N.A. COMPAÑÍA DE SEGUROS"</label>';
            HTML += '             </div>';
            HTML += '          </div>';
            HTML += '           <div class="limpiar"></div>';			
            HTML += '       </div>';

            HTML += '       <div class="f1 stack animate">';
            HTML += '          <div class="one" style="display:none" name="ConfirmarCorreo">';
            HTML += '             <div class="boxSelectCotizador">';
            HTML += '                <table>';
            HTML += '                   <tr>';
            HTML += '                       <td><input type="checkbox" id="ChkAcuerdo3" /></td>'
            HTML += '                       <td><label class="txtEtiqueta" for="ChkAcuerdo3">He leído y aceptado el aviso de privacidad.</label><a href="http://www.anaseguros.com.mx/anaweb/aviso_de_privacidad.html" target="_blank">(Abrir aquí)</a></td>'
            HTML += '                   </tr>';
            HTML += '                </table>';
            HTML += '             </div>';
            HTML += '          </div>';
            HTML += '          <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div name="DvCamposExtra"><div class="limpiar"></div></div>';
            HTML += '       <div class="f1 animate">';
            HTML += '           <div class="centrar">';
            HTML += '           <input class="btnCotizador" type="button" value="Anterior" name="BtnCambiar" actual="FrmContratante" siguiente="FrmPlan">';
            HTML += '           <input class="btnCotizador" type="button" value="Siguiente" name="BtnCambiar" actual="FrmContratante" siguiente="FrmDomicilio" id="BtnEnviarCorreo">';
            HTML += '           </div>';
            HTML += '       </div>';
            HTML += '   </div>';

            HTML += '   <div id="FrmDomicilio" style="display:none">';
            HTML += '       <div class="ttSeccion">Domicilio</div>';
            HTML += '       <div class="f3 stack animate">';
            HTML += '          <div class="one">';
            HTML += '             <div class="boxSelectCotizador">';
            HTML += '                <label class="txtEtiqueta">* Calle</label>';
            HTML += '                <input class="inputTxtAjustable Requerido numerosletras" type="text" name="cCalle" id="cCalle" nguardar="1"  maxlength="35">';
            HTML += '             </div>';
            HTML += '          </div>';
            HTML += '          <div class="two">';
            HTML += '             <div class="boxSelectCotizador">';
            HTML += '                <label class="txtEtiqueta">* No. Ext</label>';
            HTML += '                <input class="inputTxtAjustableChico Requerido numerosletras" type="text" name="cNoExt" id="cNoExt" nguardar="1"  maxlength="15">';
            HTML += '             </div>';
            HTML += '           </div>';
            HTML += '           <div class="three">';
            HTML += '             <div class="boxSelectCotizador">';
            HTML += '                <label class="txtEtiqueta">No. Int</label>';
            HTML += '                <input class="inputTxtAjustableChico numerosletras" type="text" name="cNoInt" id="cNoInt" nguardar="1"  maxlength="35">';
            HTML += '             </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f3 stack animate">';
            HTML += '          <div class="one">';
            HTML += '             <div class="boxSelectCotizador">';
            HTML += '                <label class="txtEtiqueta">* Código postal</label>';
            HTML += '                <select class="selectAjustableMedio Requerido numeros" name="cCodigo" id="cCodigo" nguardar="1" nTipo="1" cCombo="#nColonia"></select>';
            HTML += '             </div>';
            HTML += '          </div>';
            HTML += '          <div class="two">';
            HTML += '             <div class="boxSelectCotizador">';
            HTML += '                <label class="txtEtiqueta">* Colonia</label>';
            HTML += '                <select class="selectAjustable Requerido numerosletras" name="nColonia" id="nColonia" nguardar="1"></select>';
            HTML += '             </div>';
            HTML += '          </div>';
            HTML += '           <div class="three" style="display:none">';
            HTML += '                <div class="boxSelectCotizador">';
            HTML += '                    <label class="txtEtiqueta">País</label>';
            HTML += '                    <input class="inputTxtAjustable numerosletras" type="text" nguardar="1"  name="cPais" id="cPais" maxlength="20">';
            HTML += '                </div>';
            HTML += '           </div>';
            HTML += '          <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f3 stack animate">';
            HTML += '          <div class="one">';
            HTML += '             <div class="boxSelectCotizador">';
            HTML += '                <label class="txtEtiqueta">* Teléfono</label>';
            HTML += '                <input class="inputTxtAjustableMedio Requerido numeros" type="text" name="cTelefono" id="cTelefono" nguardar="1"  maxlength="10">';
            HTML += '             </div>';
            HTML += '          </div>';
            HTML += '          <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div name="DvCamposExtra"></div>';
            HTML += '       <div class="f1 animate">';
            HTML += '           <div class="centrar">';
            HTML += '           <input class="btnCotizador" type="button" value="Anterior" name="BtnCambiar" actual="FrmDomicilio" siguiente="FrmContratante">';
            HTML += '           <input class="btnCotizador" type="button" value="Siguiente" name="BtnCambiar" actual="FrmDomicilio" siguiente="FrmLegal">';
            HTML += '           </div>';
            HTML += '       </div>';
            HTML += '   </div>';

            HTML += '   <div id="FrmLegal" style="display:none">';
            HTML += '       <div class="ttSeccion">Datos legales</div>';
            HTML += '       <div class="f3 stack animate" name="TipoPersona" ntipopersona="1">';
            HTML += '           <div class="one">';
            HTML += '              <div class="boxSelectCotizador">';
            HTML += '                 <label class="txtEtiqueta">* Nacionalidad</label>';
            HTML += '                 <select class="selectAjustable Requerido" name="cNacionalidad" id="cNacionalidad" nguardar="1" ></select>';
            HTML += '              </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '              <div class="boxSelectCotizador">';
            HTML += '                 <label class="txtEtiqueta">* Tipo Identificación</label>';
            HTML += '                 <select class="selectAjustable Requerido" name="nTipoIdentificacion" id="nTipoIdentificacion" nguardar="1" >';
            HTML += '                    <option value="0" selected>--SELECCIONAR--</option>';
            HTML += '                 </select>';
            HTML += '              </div>';
            HTML += '           </div>';
            HTML += '           <div class="three">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* No. Identificación</label>';
            HTML += '                   <input class="inputTxtAjustable Requerido numerosletras" type="text" name="nIdentificacion" id="nIdentificacion" nguardar="1"  maxlength="15">';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f3 stack animate" name="TipoPersona" ntipopersona="1">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">Fiel</label>';
            HTML += '                   <input class="inputTxtAjustable numerosletras" type="text" nguardar="1"  name="cFiel" id="cFiel" maxlength="20">';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Fecha de Nacimiento</label>';
            HTML += '                   <input class="inputTxtAjustable Requerido" type="text" nguardar="1" nTipo="2" name="cNacimiento" id="cFechaTH" nTipo="2"  readonly="readonly">';
            HTML += '                   <div class="f3 stack animate" id="DvErrorFN" style="display:none"></div>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="three">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Ocupación</label>';
            HTML += '                   <select class="selectAjustable Requerido" name="cOcupacion" id="cOcupacion" nguardar="1" >';
            HTML += '                        <option value="0" selected>--SELECCIONAR--</option>';
            HTML += '                   </select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            //Ajsute cotizador
            HTML += '       <div class="f3 stack animate" name="TipoPersona" ntipopersona="1">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Pais Nacimiento</label>';
            HTML += '                   <select class="selectAjustable Requerido" nguardar="1"  name="cPaisNacimiento" id="cPaisNacimiento">';
            //HTML += '                       <option value="0">--SELECCIONAR--</option><option value="13">ARGENTINA</option><option value="43">BRASIL</option><option value="15">CANADA</option>';
            //HTML += '                       <option value="19">COREA DEL NORTE</option><option value="07">ESPAÑA</option><option value="05">ESTADOS UNIDOS</option><option value="10">FRANCIA</option>';
            //HTML += '                       <option value="42">GUATEMALA</option><option value="02">ITALIA</option><option value="18">JAPON</option><option value="01">MEXICO</option>';
            HTML += '                   </select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two" id="idEdoNac" style="display:none">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Estado Nacimiento</label>';
            HTML += '                   <select class="selectAjustable Requerido" nguardar="1"  name="cEstadoNacimiento" id="cEstadoNacimiento"></select>';
            HTML += '                   <input class="inputTxtAjustable" type="text" nguardar="1" nTipo="2" name="cEstadoNacimiento" id="cInputEdoNac" style="display:none" readonly="readonly">';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate" name="TipoPersona" ntipopersona="2" style="display:none">';
            HTML += '           <div class="one">';
            HTML += '                <div class="boxSelectCotizador">';
            HTML += '                    <label class="txtEtiqueta">* Administrador</label>';
            HTML += '                    <input class="inputTxtAjustable numerosletras" type="text" name="cAdministrador" id="cAdministrador" nguardar="1"  maxlength="35">';
            HTML += '                </div>';
            HTML += '                    </div>';
            HTML += '            <div class="two">';
            HTML += '                <div class="boxSelectCotizador">';
            HTML += '                    <label class="txtEtiqueta">* Nacionalidad Admin.</label>';
            HTML += '                    <select class="selectAjustable" name="cNacionalidad2" id="cNacionalidad2" nguardar="1" ></select>';
            HTML += '                </div>';
            HTML += '           </div>';
            HTML += '            <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate" name="TipoPersona" ntipopersona="2" style="display:none">';
            HTML += '            <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Representante</label>';
            HTML += '                   <input class="inputTxtAjustable numerosletras" type="text" name="cRepresentante" id="cRepresentante" nguardar="1"  maxlength="35">';
            HTML += '               </div>';
            HTML += '            </div>';
            HTML += '            <div class="two">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Nacionalidad Repres.</label>';
            HTML += '                   <select class="selectAjustable" name="cNacionalidadRepres" id="cNacionalidadRepres" nguardar="1" >';
            HTML += '                        <option value="0" selected>--SELECCIONAR--</option>';
            HTML += '                        <option value="1">MEXICANA</option>';
            HTML += '                        <option value="2">EXTRANJERA</option>';
            HTML += '                   </select>';
            HTML += '               </div>';
            HTML += '            </div>';
            HTML += '            <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate" name="TipoPersona" ntipopersona="2" style="display:none">';
            HTML += '            <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Fecha de Constitución</label>';
            HTML += '                   <input class="inputTxtAjustable Requerido" type="text" nguardar="1" nTipo="2" name="cFechaConstitucion" id="dFecConst" nTipo="2"  readonly="readonly">';
            HTML += '                   <div class="f3 stack animate" id="DvErrorFC" style="display:none"></div>';
            HTML += '               </div>';
            HTML += '            </div>';
            HTML += '            <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div name="DvCamposExtra"></div>';
            HTML += '       <div class="f1 animate">';
            HTML += '           <div class="centrar">';
            HTML += '           <input class="btnCotizador" type="button" value="Anterior" name="BtnCambiar" actual="FrmLegal" siguiente="FrmDomicilio">';
            HTML += '           <input class="btnCotizador" type="button" value="Siguiente" name="BtnCambiar" actual="FrmLegal" siguiente="FrmVehiculo">';
            HTML += '           </div>';
            HTML += '       </div>';
            HTML += '   </div>';

            HTML += '   <div id="FrmVehiculo" style="display:none">';
            HTML += '       <div class="ttSeccion f1b animate">Datos del Vehículo</div>';
            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Serie</label>';
            HTML += '                   <input class="inputTxtAjustable numerosletrassin Requerido" type="text" name="cSerie" id="TxtSerieCot" nguardar="1"  maxlength="17" /><label id="ILoad5" style="display:none"> Validando Serie...</label>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Motor</label>';
            HTML += '                   <input class="inputTxtAjustable numerosletras Requerido" type="text" name="cMotor" nguardar="1" maxlength="30" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Placas</label>';
            HTML += '                   <input class="inputTxtAjustable numerosletras Requerido" type="text" name="cPlacas" nguardar="1"  maxlength="8">';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Color</label>';
            HTML += '                   <select class="selectAjustable Requerido" name="cColor" id="CmbColor" nguardar="1" >';
            HTML += '                        <option value="0" selected>--SELECCIONAR--</option>';
            HTML += '                   </select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">REPUVE</label>';
            HTML += '                   <input class="inputTxtAjustable numerosletras" type="text" name="cRepuve" id="TxtRepuve" nguardar="1" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two"></div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div name="DescripcionRC" style="display:none" class="ttSeccion">Cambio de modelo y descripción</div>';
            HTML += '       <div name="DescripcionRC" style="display:none">';
            HTML += '           <div class="f3 stack animate">';
            HTML += '               <div class="one">';
            HTML += '                   <div class="boxSelectCotizador">';
            HTML += '                       <label class="txtEtiqueta">* Modelo</label>';
            HTML += '                       <input class="inputTxtAjustableMedio solonumeros Requerido" type="text" name="nModelo" id="TxtModeloRC" nguardar="1" maxlength="4"/>';
            HTML += '                   </div>';
            HTML += '               </div>';
            HTML += '               <div class="two">';
            HTML += '                   <div class="boxSelectCotizador">';
            HTML += '                       <label class="txtEtiqueta">* Descripción Vehículo</label>';
            HTML += '                       <input class="inputTxtAjustable numerosletras Requerido" type="text" name="cDescripcion" id="TxtDescripcionRC" nguardar="1" />';
            HTML += '                   </div>';
            HTML += '               </div>';
            HTML += '               <div class="limpiar"></div>';
            HTML += '           </div>';
            HTML += '       </div>';

            HTML += '       <div name="Adaptaciones" class="ttSeccion" ">Adaptaciones</div>';
            HTML += '       <div name="Adaptaciones" style="display:none" id="DvAdaptaciones">';
            HTML += '           <div class="f3 stack animate" nLinea="0">';
            HTML += '               <div class="one">';
            HTML += '                   <div class="boxSelectCotizador">';
            HTML += '                       <label class="txtEtiqueta">* Descripción</label>';
            HTML += '                       <input class="inputTxtAjustable numerosletras Requerido" type="text" name="cAdaptacionD" nLinea="0" />';
            HTML += '                   </div>';
            HTML += '               </div>';
            HTML += '               <div class="two">';
            HTML += '                   <div class="boxSelectCotizador">';
            HTML += '                       <label class="txtEtiqueta">* Valor</label>';
            HTML += '                       <input class="inputTxtAjustableMedio numeros Requerido" type="text" name="cAdaptacionV" nLinea="0" />';
            HTML += '                   </div>';
            HTML += '               </div>';
            HTML += '               <div class="three">';
            HTML += '                   <div class="boxSelectCotizador">';
            HTML += '                       <label class="txtEtiqueta"></label><br />';
            HTML += '                       <input class="btnCotizador" type="button" value="Agregar" name="BtnAgregarAd" />';
            HTML += '                       <input class="btnCotizador" type="button" value="Eliminar" name="BtnEliminarAd" nLinea="0" style="display:none"/>';
            HTML += '                   </div>';
            HTML += '               </div>';
            HTML += '               <div class="limpiar"></div>';
            HTML += '           </div>';
            HTML += '       </div>';

            HTML += '       <div name="EquipoEspecial" class="ttSeccion" style="display:none">Equipo Especial</div>';
            HTML += '       <div name="EquipoEspecial" style="display:none" id="DvEquipoEspecial">';
            HTML += '           <div class="f3 stack animate" nLinea="0">';
            HTML += '               <div class="one">';
            HTML += '                   <div class="boxSelectCotizador">';
            HTML += '                       <label class="txtEtiqueta">* Descripción</label>';
            HTML += '                       <input class="inputTxtAjustable numerosletras Requerido" type="text" name="cEquipoD" nLinea="0" />';
            HTML += '                   </div>';
            HTML += '               </div>';
            HTML += '               <div class="two">';
            HTML += '                   <div class="boxSelectCotizador">';
            HTML += '                       <label class="txtEtiqueta">* Valor</label>';
            HTML += '                       <input class="inputTxtAjustableMedio numeros Requerido" type="text" name="cEquipoV" nLinea="0" />';
            HTML += '                   </div>';
            HTML += '               </div>';
            HTML += '               <div class="three">';
            HTML += '                   <div class="boxSelectCotizador">';
            HTML += '                       <label class="txtEtiqueta"></label><br />';
            HTML += '                       <input class="btnCotizador" type="button" value="Agregar" name="BtnAgregarEq" />';
            HTML += '                       <input class="btnCotizador" type="button" value="Eliminar" name="BtnEliminarEq" nLinea="0" style="display:none"/>';
            HTML += '                   </div>';
            HTML += '               </div>';
            HTML += '               <div class="limpiar"></div>';
            HTML += '           </div>';
            HTML += '       </div>';

            HTML += '       <div name="DvCamposExtra"></div>';
            HTML += '       <div class="f1 animate">';
            HTML += '           <div class="centrar">';
            HTML += '           <input class="btnCotizador" type="button" value="Anterior" name="BtnCambiar" actual="FrmVehiculo" siguiente="FrmLegal" />';
            HTML += '           <input class="btnCotizador" type="button" value="Siguiente" name="BtnCambiar" actual="FrmVehiculo" siguiente="FrmConductor" id="BtnVehiculo" />';
            HTML += '           </div>';
            HTML += '       </div>';
            HTML += '   </div>';

            HTML += '   <div id="FrmConductor" style="display:none">';
            HTML += '       <div class="ttSeccion f1b animate">Datos del Conductor</div>';
            HTML += '       <div class="f2 stack animate" name="DatosConductor">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">Conductor</label>';
            HTML += '                   <input class="inputTxtAjustable numerosletras" type="text" name="cConductor" id="cConductor" nguardar="1"  maxlength="40">';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">Ocupación</label>';
            HTML += '                   <select class="selectAjustable" name="cConductorOcupacion" id="cConductorOcupacion" nguardar="1" >';
            HTML += '                        <option value="0" selected>--SELECCIONAR--</option>';
            HTML += '                   </select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate" name="DatosConductor">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">Licencia</label>';
            HTML += '                   <input class="inputTxtAjustable numerosletras" type="text" name="cConductorLicencia" id="cConductorLicencia" nguardar="1"  maxlength="14">';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">Fecha de nacimiento</label>';
            HTML += '                   <input class="inputTxtAjustable" type="text" name="cConductorFecNac" id="dNacimiento" nguardar="1" nTipo="2" >';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div name="Beneficiario" class="ttSeccion" style="display:none">Datos Beneficiario Preferente</div>';
            HTML += '       <div class="f2 stack animate" name="Beneficiario" style="display:none">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">Beneficiario Preferente</label>';
            HTML += '                   <input class="inputTxtAjustable numerosletras" type="text" name="cBeneficiario" id="TxtBeneficiario" nguardar="1" maxlength="100">';
            HTML += '                   <select class="selectAjustable Requerido" name="cBeneficiario" id="CmbBeneficiario" nguardar="1" >';
            HTML += '                        <option value="0" selected>--SELECCIONAR--</option>';
            HTML += '                   </select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            //    ************ DESARROLLO SEGURO DE VIDA NO NECESARIO
            //HTML += '       <div name="BeneficiarioVida" class="ttSeccion" style="display:none">Datos Beneficiario(s) Vida</div>';
            //HTML += '       <div name="BeneficiarioVida" class="Beneficiario" style="display:none">';
            //HTML += '       <div name="DvBeneficiarios" beneficiario="' + Cotizador.Parametros.nBeneficiarios + '">';
            //HTML += '           <div class="f3 stack animate" beneficiario="1">';
            //HTML += '               <div class="one">';
            //HTML += '                   <div class="boxSelectCotizador">';
            //HTML += '                       <label class="txtEtiqueta">*Nombre</label>';
            //HTML += '                       <input class="inputTxtAjustable numerosletras Requerido" type="text" name="Nombre" maxlength="100">';
            //HTML += '                   </div>';
            //HTML += '               </div>';
            //HTML += '               <div class="two">';
            //HTML += '                   <div class="boxSelectCotizador">';
            //HTML += '                       <label class="txtEtiqueta">*Apellido Paterno</label>';
            //HTML += '                       <input class="inputTxtAjustable numerosletras Requerido" type="text" name="APaterno" maxlength="100">';
            //HTML += '                   </div>';
            //HTML += '               </div>';
            //HTML += '               <div class="three">';
            //HTML += '                   <div class="boxSelectCotizador">';
            //HTML += '                       <label class="txtEtiqueta">*Apellido Materno</label>';
            //HTML += '                       <input class="inputTxtAjustable numerosletras Requerido" type="text" name="AMaterno" maxlength="100">';
            //HTML += '                   </div>';
            //HTML += '               </div>';
            //HTML += '           </div>';
            //HTML += '           <div class="limpiar"></div>';
            //HTML += '           <div class="f3 stack animate" beneficiario="1">';
            //HTML += '               <div class="one">';
            //HTML += '                   <div class="boxSelectCotizador">';
            //HTML += '                       <label class="txtEtiqueta">*Parentesco</label>';
            //HTML += '                       <input class="inputTxtAjustable numerosletras Requerido" type="text" name="Parentesco" maxlength="100">';
            //HTML += '                   </div>';
            //HTML += '               </div>';
            //HTML += '               <div class="two">';
            //HTML += '                   <div class="boxSelectCotizador">';
            //HTML += '                       <label class="txtEtiqueta">*Porcentaje</label>';
            //HTML += '                       <input class="inputTxtAjustable numerosletras Requerido" type="text" name="Porcentaje" maxlength="100">';
            //HTML += '                   </div>';
            //HTML += '               </div>';
            //HTML += '               <div class="three">';
            //HTML += '                   <div class="boxSelectCotizador">';
            //HTML += '                       <input class="btnCotizador" type="button" value="Agregar otro beneficiario" name="BtnAgregarBeneficiario" />';
            //HTML += '                   </div>';
            //HTML += '               </div>';
            //HTML += '           </div>';
            //HTML += '           <div class="limpiar"></div>';
            //HTML += '       </div>';
/*            HTML += '       </div>';*/

            HTML += '       <div name="DvCamposExtra"></div>';
            HTML += '       <div class="f1 animate">';
            HTML += '           <div class="centrar">';
            HTML += '           <input class="btnCotizador" type="button" value="Anterior" name="BtnCambiar" actual="FrmConductor" siguiente="FrmVehiculo">';
            HTML += '           <input class="btnCotizador" type="button" value="Siguiente" name="BtnCambiar" actual="FrmConductor" siguiente="FrmPago">';
            HTML += '           </div>';
            HTML += '       </div>';
            HTML += '   </div>';

            HTML += '   <div id="FrmPago" style="display:none">';
            HTML += '       <div id="FrmEmpleadoCor" style="display:none" class="ttSeccion f1b animate">Datos de empleado</div>';
            HTML += '       <div class="f2 stack animate" name="RFCCOR" style="display:none">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* RFC</label>';
            HTML += '                   <input class="inputTxtAjustable numerosletras Requerido" type="text" name="cRFCCOR" nguardar="1" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate" name="CURPCOR" style="display:none">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* CURP</label>';
            HTML += '                   <input class="inputTxtAjustable numerosletras Requerido" type="text" name="cCURPCOR" nguardar="1" maxlength="18"/>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate" name="EmpleadoCOR" style="display:none">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* No. de empleado</label>';
            HTML += '                   <input class="inputTxtAjustable Requerido" type="text" name="cEmpleadoCOR" nguardar="1" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="ttSeccion f1b animate">Selecciona el inicio de vigencia</div>';
            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">Inicio de Vigencia</label>';
            HTML += '                   <input class="inputTxtAjustable numerosletras" type="text" name="cInicioVigencia" id="TxtInicioVigencia" nguardar="1" readonly="readonly" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two" id="HoraVigencia" style="display:none">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">Hora de Inicio</label>';
            HTML += '                   <select class="selectAjustableChico Requerido" name="cHora" id="CmbHora" nguardar="1"></select><select class="selectAjustableChico Requerido" name="cMinuto" id="CmbMinuto" nguardar="1"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two" name="FinVigencia" style="display:none">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">Fin de Vigencia</label>';
            HTML += '                   <input class="inputTxtAjustable numerosletras" type="text" name="TxtFinVigencia" disabled nguardar="1" />';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';
            HTML += '       <div class="ttSeccion f1b animate">Selecciona el metodo de pago</div>';
            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Metodo de Pago</label>';
            HTML += '                   <select class="selectAjustable Requerido" name="nMetodoPago" id="CmbMetodoPago3" nguardar="1" >';
            HTML += '                        <option value="0" selected>--SELECCIONAR--</option>';
            HTML += '                   </select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two" name="DomiciliarTarjeta" style="display:none">';
            HTML += '                   <label class="txtEtiqueta">Domiciliar Póliza</label>';
            HTML += '                   <select class="selectAjustable" name="cDomiciliar" id="CmbDomiciliar" nguardar="1" >';
            HTML += '                        <option value="0" selected>--SELECCIONAR--</option>';
            HTML += '                        <option value="S" selected>Si</option>';
            HTML += '                        <option value="N" selected>No</option>';
            HTML += '                   </select>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate" name="DatosTarjeta" style="display:none">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta" id="DescNombreCuenta">* Nombre del tarjetahabiente</label>';
            HTML += '                   <input class="inputTxtAjustable Requerido numerosletras2" type="text" nguardar="1" name="cNomTarjet" id="cNomTarjet" maxlength="20">';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate" name="DatosTarjeta" style="display:none">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta" id="DescNumeroCuenta">* Número de tarjeta</label>';
            HTML += '                   <input class="inputTxtAjustable Requerido solonumeros" type="password" nguardar="1" name="nTarjeta" id="nTarjeta" maxlength="16">';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <img src="' + Parametros.Link + 'Images/AMEX.png" style="display:none; margin-top: 30px;height: 30px;" id="LgAmex"/><img src="' + Parametros.Link + 'Images/VisaMc.png" style="display:none;margin-top: 30px; height:30px;" id="LgVisaMc"/>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate" name="DatosTarjeta" style="display:none">';
            HTML += '           <div class="one" id="dvVigenciaTarjeta">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Vigencia</label>';
            HTML += '                   <select class="selectAjustableChico Requerido" name="cMes" id="MesTarjeta" nguardar="1">';
            HTML += '                       <option value="0" selected>--Seleccionar--</option>';
            HTML += '                   </select>';
            HTML += '                   <select class="selectAjustableChico Requerido" name="cAno" id="YearTarjeta" nguardar="1">';
            HTML += '                       <option value="0" selected>--Seleccionar--</option>';
            HTML += '                   </select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two" id="CodigoSeguridad">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Código de seguridad</label>';
            HTML += '                   <input class="inputTxtAjustable Requerido solonumeros" type="password" nguardar="1" name="cCodSeg" id="cCodSeg" maxlength="3">';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            //HTML += '       <div class="f3 stack animate" name="DatosTarjeta" style="display:none">';
            //HTML += '           <div class="one">';
            //HTML += '               <div class="boxSelectCotizador">';
            //HTML += '                   <label class="txtEtiqueta" id="DescNumeroCuenta">* Número de tarjeta</label>';
            //HTML += '                   <input class="inputTxtAjustable Requerido solonumeros" type="text" nguardar="1" name="nTarjeta" id="nTarjeta" maxlength="16">';
            //HTML += '               </div>';
            //HTML += '           </div>';

            //HTML += '           <div class="two">';
            //HTML += '               <div class="boxSelectCotizador">';
            //HTML += '                   <img src="' + Parametros.Link + 'Images/AMEX.png" style="display:none; margin-top: 30px;height: 30px;" id="LgAmex"/><img src="' + Parametros.Link + 'Images/VisaMc.png" style="display:none;margin-top: 30px; height:30px;" id="LgVisaMc"/>';
            //HTML += '               </div>';
            //HTML += '           </div>';

            //HTML += '           <div class="three" id="CodigoSeguridad">';
            //HTML += '               <div class="boxSelectCotizador">';
            //HTML += '                   <label class="txtEtiqueta">* Código de seguridad</label>';
            //HTML += '                   <input class="inputTxtAjustable Requerido solonumeros" type="text" nguardar="1" name="cCodSeg" id="cCodSeg" maxlength="3">';
            //HTML += '               </div>';
            //HTML += '           </div>';
            //HTML += '           <div class="limpiar"></div>';
            //HTML += '       </div>';

            //HTML += '       <div class="f2 stack animate" name="DatosTarjeta" style="display:none">';
            //HTML += '           <div class="one">';
            //HTML += '               <div class="boxSelectCotizador">';
            //HTML += '                   <label class="txtEtiqueta" id="DescNombreCuenta">* Nombre del tarjetahabiente</label>';
            //HTML += '                   <input class="inputTxtAjustable Requerido numerosletras2" type="text" nguardar="1" name="cNomTarjet" id="cNomTarjet" maxlength="20">';
            //HTML += '               </div>';
            //HTML += '           </div>';

            //HTML += '           <div class="two" id="dvVigenciaTarjeta">';
            //HTML += '               <div class="boxSelectCotizador">';
            //HTML += '                   <label class="txtEtiqueta">* Vigencia</label>';
            //HTML += '                   <select class="selectAjustableChico Requerido" name="cMes" id="MesTarjeta" nguardar="1">';
            //HTML += '                       <option value="0" selected>--Seleccionar--</option>';
            //HTML += '                   </select>';
            //HTML += '                   <select class="selectAjustableChico Requerido" name="cAno" id="YearTarjeta" nguardar="1">';
            //HTML += '                       <option value="0" selected>--Seleccionar--</option>';
            //HTML += '                   </select>';
            //HTML += '               </div>';
            //HTML += '           </div>';
            //HTML += '           <div class="limpiar"></div>';
            //HTML += '       </div>';
            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador" id="MesesSinIntereses" style="display:none">';
            HTML += '                   <label class="txtEtiqueta">* Tipo de cargo</label>';
            HTML += '                   <select class="selectAjustable" name="cMSI" id="MSIPago">';
            HTML += '                   </select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate" name="Domiciliacion" style="display:none">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Banco</label>';
            HTML += '                   <select class="selectAjustable Requerido" name="cBanco" id="cBanco" nguardar="1"></select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta" style="display:none">RFC Domiciliación</label>';
            HTML += '                   <input class="inputTxtAjustable" type="text" nguardar="1" name="cRFCDom" id="cRFCDom" maxlength="13" style="display:none">';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate" name="Domiciliacion" style="display:none">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta" id="DescDireccionCuenta" style="display:none">* Dirección tarjetahabiente</label>';
            HTML += '                   <input class="inputTxtAjustable Requerido numerosletras" type="text" nguardar="1" name="cDireccionTH" id="cDireccionTH" maxlength="80" style="display:none">';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate" name="Domiciliacion2" style="display:none">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Factura</label>';
            HTML += '                   <select class="selectAjustableChico Reuquerido" name="cFactura" id="cFactura" nguardar="1">';
            HTML += '                       <option value="0" selected>--Seleccionar--</option>';
            HTML += '                       <option value="S">SI</option>';
            HTML += '                       <option value="N">NO</option>';
            HTML += '                   </select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="txtEtiqueta">* Envío de Comprobante</label>';
            HTML += '                   <select class="selectAjustableChico Requerido" name="cComprobante" id="cComprobante" nguardar="1">';
            HTML += '                       <option value="0" selected>--SELECCIONAR--</option>';
            HTML += '                       <option value="S">SI</option>';
            HTML += '                       <option value="N">NO</option>';
            HTML += '                   </select>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate" name="MontoCob" style="display:none">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="ttSeccionMontoTotal animate" id="nPrimerPagoLb" ></label>';
            //HTML += '                   <input class="inputTxtAjustable" type="text"  id="nPrimerPago"  >';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate" name="MontoCob" style="display:none">';
            HTML += '           <div class="one" id="DvPagoSub">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <label class="ttSeccionPagosSubsecuentes animate" id="nPagosSubsecuentesLb" ></label>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div name="DvCamposExtra"></div>';
            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <table>';
            HTML += '                       <tr>';
            HTML += '                           <td><input type="checkbox" id="ChkAcuerdo" /></td>'
            HTML += '                           <td><label class="txtEtiqueta" for="ChkAcuerdo"> He leído y aceptado condiciones y términos. </label> <a href="http://www.anaseguros.com.mx/anaweb/terminos_y_condiciones.html" target="_blank" style="float:left;cursor:pointer;">(Abrir aquí)</a></td>'
            HTML += '                       </tr>'
            HTML += '                       <tr>';
            HTML += '                           <td><input type="checkbox" id="ChkAcuerdo2" /></td>'
            HTML += '                           <td><label class="txtEtiqueta" for="ChkAcuerdo2"> He leído y aceptado que mis datos son correctos. <a id="BtnMisDatos" style="cursor:pointer">(Abrir aquí)</a></label></td>'
            HTML += '                       </tr>'
            HTML += '                   </table>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="two" id="DvDatosBCor" style="display:none">';
            HTML += '               <div class="boxSelectCotizador">';
            HTML += '                   <table>';
            HTML += '                       <tr>';
            HTML += '                           <td><input type="checkbox" id="ChkAcuerdo4" /></td>'
            HTML += '                           <td><label class="txtEtiqueta" for="ChkAcuerdo4"> He leído y estoy de acuerdo en que los datos bancarios se utilicen en caso de renovacion. <a id="BtnMisDatosBanco" style="cursor:pointer">(Abrir aquí)</a></label></td>'
            HTML += '                       </tr>'
            HTML += '                   </table>';
            HTML += '               </div>';
            HTML += '           </div>';
            HTML += '           <div class="limpiar"></div>';
            HTML += '       </div>';

            HTML += '       <div class="f2 stack animate">';
            HTML += '           <div class="one">';
            HTML += '               <form method="post" target="_blank" id="FrmAcuerdo" action="' + Parametros.Link + 'DataProviders/acuerdo.php">';
            HTML += '                   <input type="hidden" name="NOMBRE" id="NombreAcuerdo"/>';
            HTML += '                   <input type="hidden" name="vehiculo" id="VehiculoAcuerdo"/>';
            HTML += '                   <input type="hidden" name="modelo" id="ModeloAcuerdo"/>';
            HTML += '                   <input type="hidden" name="serie" id="SerieAcuerdo"/>';
            HTML += '               </form>';
            HTML += '           </div>';
            HTML += '           <div class="two">';
            HTML += '               <form method="post" target="_blank" id="FrmAcuerdoCOR" action="' + Parametros.Link + 'DataProviders/acuerdob.php">';
            HTML += '                   <input type="hidden" name="NOMBRE_COR" id="NombreAcuerdoCOR"/>';
            HTML += '                   <input type="hidden" name="CALLE_COR" id="CalleAcuerdoCOR"/>';
            HTML += '                   <input type="hidden" name="EDO_MUN_COR" id="MunicipioAcuerdoCOR"/>';
            HTML += '                   <input type="hidden" name="TEL_COR" id="TelefonoAcuerdoCOR"/>';
            HTML += '                   <input type="hidden" name="PAQ_COR" id="PaqueteAcuerdoCOR"/>';
            HTML += '                   <input type="hidden" name="NUM_PAGOS_COR" id="NumPagoAcuerdoCOR"/>';
            HTML += '                   <input type="hidden" name="BANCO_COR" id="BancoAcuerdoCOR"/>';
            HTML += '                   <input type="hidden" name="COSTO_TOTAL_COR" id="TotalAcuerdoCOR"/>';
            HTML += '                   <input type="hidden" name="NUM_REC_COR" id="NumRecPagoAcuerdoCOR"/>';
            HTML += '                   <input type="hidden" name="COLONIA_COR" id="ColoniaAcuerdoCOR"/>';
            HTML += '                   <input type="hidden" name="CP_COR" id="CPAcuerdoCOR"/>';
            HTML += '                   <input type="hidden" name="RFC_COR" id="RFCAcuerdoCOR"/>';
            HTML += '                   <input type="hidden" name="VIGENCIA_COR" id="VigenciaAcuerdoCOR"/>';
            HTML += '                   <input type="hidden" name="NUM_CTA_COR" id="NumCtaAcuerdoCOR"/>';
            HTML += '                   <input type="hidden" name="PRIMER_PAGO_COR" id="PrimerPagoAcuerdoCOR"/>';
            HTML += '                   <input type="hidden" name="SUBSECUENTES_COR" id="SubPagoAcuerdoCOR"/>';
            HTML += '                   <input type="hidden" name="CLAVE_ADM_COR" id="ClaveAdmAcuerdoCOR"/>';
            HTML += '                   <input type="hidden" name="USER_COR" id="UserAcuerdoCOR"/>';
            HTML += '                   <input type="hidden" name="FECSOL_COR" id="FecSolAcuerdoCOR"/>';
            HTML += '                   <input type="hidden" name="SERIE_COR" id="SerieAcuerdoCOR"/>';
            HTML += '               </form>';
            HTML += '           </div>';
            HTML += '       </div>';

            HTML += '       <div class="f1 animate">';
            HTML += '           <div class="centrar">';
            HTML += '           <input class="btnCotizador" type="button" value="Anterior" name="BtnCambiar" actual="FrmPago" siguiente="FrmConductor">';
            HTML += '           <input class="btnCotizador ui-state-disabled" type="button" value="Comprar" id="BtnEmitir" disabled /><img src="' + Parametros.Link + 'Images/ajax-loader.gif" style="display:none" id="ILoad3" width="25px"/>';
            HTML += '           </div>';
            HTML += '       </div>';
            HTML += '   </div>';

            HTML += '   <div id="FrmPoliza" style="display:none">';
            HTML += '       <div class="f1 animate">';
            HTML += '     	    <div class="one">';
            HTML += '       	    <p>Gracias por asegurarte con <b>ANA Seguros.</b> A continuación podrás <b>imprimir</b> o <b>guardar</b> la carátula de tu póliza. Es importante que visites las <b>Condiciones Generales</b> para conocer más de tu seguro de auto, a qué tienes derecho como asegurado.</p>';
            HTML += '               <p>Te recordamos que puedes llamarnos al <b>800 8353 262</b> para cualquier duda o aclaración sobre tu póliza.</p>';
            HTML += '           </div>';
            HTML += '       </div>';
            HTML += '       <div class="f3 stack animate">';
            HTML += '    	    <div class="one"><a target="_blank" id="cmdPoliza" href=""><input type="button" value=""  class="btnCotizador" id="cmdPoliza2" /></a></div>';
            HTML += '           <div class="two"><a target="_blank" id="CondicionesGral" href=""><input id="cmbCondiciones" type="button" value="Condiciones Grales." class="btnCotizador" /></a></div>';
            HTML += '    	    <div class="three"><input class="btnCotizador" type="button" value="Nueva cotización" id="BtnReload"/></div>';
            HTML += '       </div>';
            HTML += '       <div class="f3 stack animate" id="ComprobantePago" style="display:none">';
            HTML += '    	    <div class="one-three"><a target="_blank" id="cmdComPago" href=""><input type="button" value="Comprobante de pago"  class="btnCotizador" id="cmdComPago2" /></a></div>';
            HTML += '       </div>';			
            HTML += '       <div class="limpiar"></div>';
            HTML += '   </div>';

            HTML += '</div>';

            $("#DvCotizador").html(HTML);
            $('input[type=radio]').iCheck({
                radioClass: 'iradio_square-red'
            });

            $("#BtnReload").click(function () {
                location.reload(true);
            });

            $("#BtnRegistroCor").unbind("click").click(function () {
                $("#DvLogMicrositios").hide();
                $("#DvRegistroCor").show();
                Cotizador.CmbAgrupadorCor();
            });

            $("#BtnRegresarCor").unbind("click").click(function () {
                $("#DvLogMicrositios").show();
                $("#DvRegistroCor").hide();
            });

            $("#BtnRecuperaCor").unbind("click").click(function () {
                $("#TxtUsuarioRecuperaCor").val($("#TxtUsuarioMic").val());
                $("#DvLogMicrositios").hide();
                $("#DvRecuperaCor").show();
            });

            $("#BtnRegresarRec").unbind("click").click(function () {
                $("#DvLogMicrositios").show();
                $("#DvRecuperaCor").hide();
            });

            $('#BtnCorReload').click(function () {
                if (window.location.href.split('?')[1].split('tokentec').length > 1) {                    
                    window.location.href = window.location.href.split('?')[0].split('#')[0] + "?tokentec" + window.location.href.split('?')[1].split('tokentec')[1].split('&')[0]; 
                } else {
                    window.location.href = window.location.href.split('?')[0].split('#')[0];
                }

                
            });

            $('#BtnCliente').click(function () {
                window.location.href = "https://server.anaseguros.com.mx/Micrositios/EXATECCOR/Cotizador.html?tokentec=" + ASHT.GetUrlParam("tokentec")[0];
            });

            Cotizador.RegistrarCor(-1);

            $("#BtnRecuperaEnvio").unbind("click").click(function () {
                if (!Cotizador.ValidaRequeridos("#DvRecuperaCor")) {
                    $.ajax({
                        type: 'POST',
                        url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                        data: {
                            servicio: 'RecuperaEnvio',
                            //cUsuario: $("#TxtUsuarioRecuperaCor").val(),
                            cCorreo: $("#TxtCorreoRecuperaCor").val(),
                            ccAgente: "ENSA",
                            cTokenCor: ASHT.GetUrlParam("tokencor")[0]
                        },
                        success: function (data) {
                            jQuery.globalEval(data);
                        },
                        timeout: 50000,
                        dataType: "text",
                        async: false
                    });
                }
            });
            var GeoHTML = true;
            Cotizador.AgregarFuncionesEvento.LogInMicrositios(cLlaveGrupoNegocio);
            Cotizador.VerificarAgente(cLlaveGrupoNegocio);

            $("[name=BtnAgregarBeneficiario]").unbind("click").click(function () {
                Cotizador.AgregarBeneficiario();
            });

            $("#MSIPago").unbind("change").change(function () {
                if ($("#MSIPago").val() != "C") {
                    $("#nPrimerPagoLb").html("Total a pagar: $" + Cotizador.Parametros.nPrimerPago + " a " + $("#MSIPago").val() + " MSI");
                } else {                    
                    if (Cotizador.Parametros.nSubsecuentes.length > 0) {
                        $("#nPrimerPagoLb").html("Pago con tarjeta por: $" + Cotizador.Parametros.nPrimerPago);
                        var info = "";
                        if (Cotizador.Parametros.cNumPagos == "1") {
                            info = "Resta " + Cotizador.Parametros.cNumPagos + " pago de $";
                        } else {
                            info = "Restan " + Cotizador.Parametros.cNumPagos + " pagos de $";
                        }
                        $("#nPagosSubsecuentesLb").html(info + Cotizador.Parametros.nSubsecuentes);
                        $("#DvPagoSub").show();
                    } else {
                        $("#nPrimerPagoLb").html("Total a pagar: $" + Cotizador.Parametros.nPrimerPago);
                        $("#nPagosSubsecuentesLb").html("");
                        $("#DvPagoSub").hide();
                    }
                }
                
            });

            $("#nTarjeta").focusout(function () {
                $.ajax({
                    type: 'POST',
                    url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                    data: {
                        servicio: 'ConsultarTarjetaMSI',
                        cTarjeta: $('#nTarjeta').val(),
                        MesesAutorizados: Cotizador.Parametros.cPromoMSI,
                        bMSIAutorizado: Cotizador.Parametros.Msi,
                        cLlave: Cotizador.Parametros.DataGuide,
                        llavecheck: Cotizador.Parametros.tokencotcheck,
                        cTokenCor: ASHT.GetUrlParam("tokencor")[0]
                    }, success: function (data) {
                        jQuery.globalEval(data);
                        if (Cotizador.Parametros.Msi) {
                            try {
                                var opciones = "";
                                for (var i = 0; i <= arrValoresMSI.length - 1; i++) {
                                    opciones += "<option value='" + arrValoresMSI[i].nValor + "' >" + arrValoresMSI[i].cValor + "</option>";
                                }

                                if (arrValoresMSI.length > 1) {
                                    $("#MSIPago").html(opciones);
                                    $("#MesesSinIntereses").show();
                                } else {
                                    //opciones += "<option value='C' >Contado</option>";
                                    $("#MSIPago").html(opciones);
                                    $("#MesesSinIntereses").hide();
                                }

                            }
                            catch (e) {
                                console.log(e.message);
                            }
                        }
                    },
                    timeout: 50000,
                    dataType: "text",
                    async: true
                });
            });

            $("#nTarjeta").on("keyup", (function (e) {
                if ($("#CmbMetodoPago3").val() == "2") {
                    if (e.which != 46 && e.which != 8) {
                        if (e.ctrlKey && e.which == 86) {
                            return;
                        } else {
                            if ($(this).val().length > 5) {
                                if ($(this).val().substr(0, 1) == "3") {
                                    $("#nTarjeta").attr('maxlength', '15');
                                    $("#cCodSeg").attr('maxlength', '4');
                                    Cotizador.Parametros.TipoTarjeta = "A"; //AMEX
                                    $("#LgAmex").show();
                                    $("#LgVisaMc").hide();
                                } else {
                                    $("#nTarjeta").attr('maxlength', '16');
                                    $("#cCodSeg").attr('maxlength', '3');
                                    Cotizador.Parametros.TipoTarjeta = "O"; //Visa/MasterCard
                                    if ($(this).val().substr(0, 1) == "4" || $(this).val().substr(0, 1) == "5") {
                                        $("#LgVisaMc").show();
                                        $("#LgAmex").hide();
                                    } else {
                                        $("#LgVisaMc").hide();
                                        $("#LgAmex").hide();
                                    }
                                }
                            }
                        }
                    } else {
                        if ($(this).val().length < 6) {
                            $("#LgAmex").hide();
                            $("#LgVisaMc").hide();
                        } else {
                            if ($(this).val().substr(0, 1) == "3") {
                                $("#nTarjeta").attr('maxlength', '15');
                                $("#cCodSeg").attr('maxlength', '4');
                                Cotizador.Parametros.TipoTarjeta = "A"; //AMEX
                                $("#LgAmex").show();
                                $("#LgVisaMc").hide();
                            } else {
                                $("#nTarjeta").attr('maxlength', '16');
                                $("#cCodSeg").attr('maxlength', '3');
                                Cotizador.Parametros.TipoTarjeta = "O"; //Visa/MasterCard
                                if ($(this).val().substr(0, 1) == "4" || $(this).val().substr(0, 1) == "5") {
                                    $("#LgVisaMc").show();
                                    $("#LgAmex").hide();
                                } else {
                                    $("#LgVisaMc").hide();
                                    $("#LgAmex").hide();
                                }
                            }
                        }
                    }
                }
            }));

            $('#BtnEviaCotG').unbind("click").click(function () {
                if (!Cotizador.ValidaRequeridos("#DvClienteGuerrero")) {

                    $.ajax({
                        type: 'POST',
                        url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                        data: {
                            servicio: 'EnviarCotizacionGuerrero',
                            cLlave: Cotizador.Parametros.DataGuide,
                            cNombre: $("#TxtNombreCliente").val(),
                            cCorreo: $("#cCorreoDatosG").val(),
                            cTelefono: $("#cTelefonoDatosG").val(),
                            cSerie: $("#TxtSerieCotG").val()
                        },
                        success: function (data) {
                            jQuery.globalEval(data);
                        },
                        timeout: 50000,
                        dataType: "text",
                        async: false
                    });
                }
            });

            $('#TxtSerieCotG').focusout(function () {
                $(this).val($(this).val().toUpperCase());
            });

            if (ASHT.GetUrlParam("pRegistro")[0] == "1") {
                $('#TxtCodigoCor').attr('title', 'Ingresa código: EXATEC20');
                $('#TxtCodigoCor').attr('placeholder', 'Ingresa código:  "EXATEC20"');
                $("#DvLogMicrositios").hide();
                $("#DvRegistroCor").show();
                $("#BtnRegresarCor").val('Iniciar Sesión')
                Cotizador.CmbAgrupadorCor();
            }
        } else {
            alert(cText); window.close();
        }
    },

    //    ************ DESARROLLO SEGURO DE VIDA NO NECESARIO
    //AgregarBeneficiario: function () {
    //    Cotizador.Parametros.nBeneficiarios += 1;

    //    var HTML = '';
    //    HTML += '       <div name="DvBeneficiarios" beneficiario="' + Cotizador.Parametros.nBeneficiarios + '">';
    //    HTML += '           <div class="f3 stack animate">';
    //    HTML += '               <div class="one">';
    //    HTML += '                   <div class="boxSelectCotizador">';
    //    HTML += '                       <label class="txtEtiqueta">*Nombre</label>';
    //    HTML += '                       <input class="inputTxtAjustable numerosletras Requerido" type="text" name="Nombre" maxlength="100">';
    //    HTML += '                   </div>';
    //    HTML += '               </div>';
    //    HTML += '               <div class="two">';
    //    HTML += '                   <div class="boxSelectCotizador">';
    //    HTML += '                       <label class="txtEtiqueta">*Apellido Paterno</label>';
    //    HTML += '                       <input class="inputTxtAjustable numerosletras Requerido" type="text" name="APaterno" maxlength="100">';
    //    HTML += '                   </div>';
    //    HTML += '               </div>';
    //    HTML += '               <div class="three">';
    //    HTML += '                   <div class="boxSelectCotizador">';
    //    HTML += '                       <label class="txtEtiqueta">*Apellido Materno</label>';
    //    HTML += '                       <input class="inputTxtAjustable numerosletras Requerido" type="text" name="AMaterno" maxlength="100">';
    //    HTML += '                   </div>';
    //    HTML += '               </div>';
    //    HTML += '           </div>';
    //    HTML += '           <div class="limpiar"></div>';
    //    HTML += '           <div class="f3 stack animate">';
    //    HTML += '               <div class="one">';
    //    HTML += '                   <div class="boxSelectCotizador">';
    //    HTML += '                       <label class="txtEtiqueta">*Parentesco</label>';
    //    HTML += '                       <input class="inputTxtAjustable numerosletras Requerido" type="text" name="Parentesco" maxlength="100">';
    //    HTML += '                   </div>';
    //    HTML += '               </div>';
    //    HTML += '               <div class="two">';
    //    HTML += '                   <div class="boxSelectCotizador">';
    //    HTML += '                       <label class="txtEtiqueta">*Porcentaje</label>';
    //    HTML += '                       <input class="inputTxtAjustable numerosletras Requerido" type="text" name="Porcentaje" maxlength="100">';
    //    HTML += '                   </div>';
    //    HTML += '               </div>';
    //    HTML += '               <div class="three">';
    //    HTML += '                   <div class="boxSelectCotizador">';
    //    HTML += '                       <input class="btnCotizador" type="button" value="Eliminar" name="BtnEliminarBeneficiario" beneficiario="' + Cotizador.Parametros.nBeneficiarios + '"/>';
    //    HTML += '                   </div>';
    //    HTML += '               </div>';
    //    HTML += '           </div>';
    //    HTML += '           <div class="limpiar"></div>';
    //    HTML += '       </div>';

    //    $("[name=BeneficiarioVida].Beneficiario").append(HTML);

    //    $("[name=BtnEliminarBeneficiario]").unbind("click").click(function () {
    //        $("[beneficiario=" + $(this).attr("beneficiario") + "]").remove();
    //    });
    //},

    RegistrarCor: function (nIdUsuario) {
        $("#BtnRegistrarCor").unbind("click").click(function () {
            if (!Cotizador.ValidaRequeridos("#DvRegistroCor")) {
                if ($("#TxtPasswordCor").val() == $("#TxtConfirmaCor").val()) {
                    $.ajax({
                        type: 'POST',
                        url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                        data: {
                            servicio: 'RegistrarCor',
                            cNombre: $("#TxtNombreCor").val(),
                            cCorreo: $("#TxtCorreoCor").val(),
                            cPassword: $("#TxtPasswordCor").val(),
                            nIdCorAgrupador: $("#CmbCorAgrupador").val(),
                            cCodigo: $("#TxtCodigoCor").val(),
                            nIdElemento: $("[name=CmbNivel]:last").val(),
                            nEmision: $("#CmbCorPermisoEmision").val(),
                            Direccion: window.location.href.replace("#!", ""),
                            ccAgente: "ENSA",
                            cTokenCor: ASHT.GetUrlParam("tokencor")[0],
                            nIdUsuario: nIdUsuario
                        },
                        success: function (data) {
                            jQuery.globalEval(data);
                        },
                        timeout: 50000,
                        dataType: "text",
                        async: false
                    });
                } else {
                    alert("La confirmación de la contraseña no coincide, favor de revisar.")
                }
            }
        });
    },

    CmbAgrupadorCor: function () {
        $("#CmbCorAgrupador").unbind("change").change(function () {
            $.ajax({
                type: 'POST',
                url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                data: {
                    servicio: 'ConsultaCorNiveles',
                    nIdCorAgrupador: $("#CmbCorAgrupador").val(),
                    ccAgente: "PASA"
                },
                success: function (data) {
                    jQuery.globalEval(data);

                    var HTML = '';

                    for (var i = 0; i <= arrCorNiveles.length - 1; i++) {
                        if (i % 2 == 0) {
                            HTML += '       <div class="f2 stack animate">';
                            HTML += '           <div class="one">';
                            HTML += '               <div class="boxSelectCotizador">';
                            HTML += '                   <label class="txtEtiqueta">* ' + arrCorNiveles[i].cNivel + '</label>';
                            HTML += '                   <select class="selectAjustable Requerido" name="CmbNivel" nNivel="' + arrCorNiveles[i].nNivel + '"></select>';
                            HTML += '               </div>';
                            HTML += '           </div>';

                            if (i == arrCorNiveles.length - 1) {
                                HTML += '           <div class="limpiar"></div>';
                                HTML += '       </div>';
                            }
                        } else {
                            HTML += '           <div class="two">';
                            HTML += '               <div class="boxSelectCotizador">';
                            HTML += '                   <label class="txtEtiqueta">* ' + arrCorNiveles[i].cNivel + '</label>';
                            HTML += '                   <select class="selectAjustable Requerido" name="CmbNivel" nNivel="' + arrCorNiveles[i].nNivel + '"></select>';
                            HTML += '               </div>';
                            HTML += '           </div>';

                            HTML += '           <div class="limpiar"></div>';
                            HTML += '       </div>';
                        }
                    }

                    $("#DvCorNiveles").html(HTML);

                    HTML = '';

                    HTML += '<option value="0">--Seleccionar--</option>';
                    for (var i = 0; i <= arrCorElementos.length - 1; i++) {
                        HTML += '<option value="' + arrCorElementos[i].nIdElemento + '">' + arrCorElementos[i].cElemento + '</option>';
                    }

                    $("[name=CmbNivel][nNivel=1]").html(HTML);

                    $("[name=CmbNivel]").unbind("change").change(function () {
                        Cotizador.LlenarCorNiveles(this);
                    });
                },
                timeout: 50000,
                dataType: "text",
                async: false
            });
        });
    },

    LlenarCorNiveles: function (_this) {
        var nNivel = $(_this).attr("nNivel");
        var nNivelSig = parseInt(nNivel) + 1;


        if ($(_this).val() > 0 && $("[name=CmbNivel][nNivel=" + nNivelSig + "]").length > 0) {
            $.ajax({
                type: 'POST',
                url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                data: {
                    servicio: 'LlenarCorNiveles',
                    nIdElementoP: $(_this).val(),
                    ccAgente: "ENSA",
                    cTokenCor: ASHT.GetUrlParam("tokencor")[0]
                },
                success: function (data) {
                    jQuery.globalEval(data);

                    var HTML = '';

                    HTML += '<option value="0">--Seleccionar--</option>';
                    for (var i = 0; i <= arrCorElementos.length - 1; i++) {
                        HTML += '<option value="' + arrCorElementos[i].nIdElemento + '">' + arrCorElementos[i].cElemento + '</option>';
                    }

                    $("[name=CmbNivel][nNivel=" + nNivelSig + "]").html(HTML);
                },
                timeout: 50000,
                dataType: "text",
                async: false
            });
        } else {

        }
    },

    LogInMicrositios: function (cLlaveGrupoNegocio) {
        if (!Cotizador.ValidaRequeridos("#DvLogMicrositios")) {
            if (Cotizador.Parametros.bCorLog) {
                $.ajax({
                    type: 'POST',
                    url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                    data: {
                        servicio: 'LogInCor',
                        cUsuario: $("#TxtUsuarioMic").val(),
                        cPassword: $("#TxtPassMic").val(),
                        cTokenCor: ASHT.GetUrlParam("tokencor")[0],
                        cLlaveGrupoNegocio: cLlaveGrupoNegocio
                    },
                    success: function (data) {
                        jQuery.globalEval(data);

                        if (cTokenCor != "") {
                            var liga = window.location.href.replace("#!", "");
                            if (liga.indexOf('tokentec') != -1) {
                                window.location.href = window.location.pathname + "?tokentec=" + ASHT.GetUrlParam("tokentec")[0] + "&" + $.param({ 'tokencor': cTokenCor }) ;
                            } else {
                                window.location.href = window.location.pathname + "?" + $.param({ 'tokencor': cTokenCor });
                            }
                            
                        }
                    },
                    timeout: 50000,
                    dataType: "text",
                    async: false
                });
            } else {
                $.ajax({
                    type: 'POST',
                    url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                    data: {
                        servicio: 'LogInMicrositios',
                        cUsuario: $("#TxtUsuarioMic").val(),
                        cPassword: $("#TxtPassMic").val(),
                        cTokenCor: ASHT.GetUrlParam("tokencor")[0]
                    },
                    success: function (data) {
                        jQuery.globalEval(data);

                        if (cToken != "") {                            
                            window.location.href = window.location.pathname + "?" + $.param({ 'token': cToken });                            
                        }
                    },
                    timeout: 50000,
                    dataType: "text",
                    async: false
                });
            }
        }
    },
    AgregarFuncionesEvento: {
        LogInMicrositios: function (cLlaveGrupoNegocio) {
            $("#TxtPassMic").unbind("keypress").keypress(function (event) {
                if (event.which == 13) {
                    if ($("#TxtPassMic").val() != "") {
                        Cotizador.LogInMicrositios(cLlaveGrupoNegocio);
                    }
                }
            });

            $("#BtnEntraMic").unbind("click").click(function () {
                Cotizador.LogInMicrositios(cLlaveGrupoNegocio);
            });
        },
        SoloNumeros: function () {
            $(".solonumeros").unbind("keypress").keypress(function (event) {
                var tecla = (document.all) ? event.keyCode : event.which;
                var letra = /[0-9]/.test(String.fromCharCode(tecla));
                return letra;
            });
        },
        Numeros: function () {
            $(".numeros").unbind("keypress").keypress(function (event) {
                var tecla = (document.all) ? event.keyCode : event.which;
                var letra = /[0-9 . /-]/.test(String.fromCharCode(tecla));
                return letra;
            });
        },
        NumerosPipe: function () {
            $(".numerospipe").unbind("keypress").keypress(function (event) {
                var tecla = (document.all) ? event.keyCode : event.which;
                var letra = /[0-9 . /|]/.test(String.fromCharCode(tecla));
                return letra;
            });
        },
        NumerosLetras: function () {
            $(".numerosletras").unbind("keypress").keypress(function (event) {
                var tecla = (document.all) ? event.keyCode : event.which;
                var letra = /[0-9 A-Z a-z ñ & @ . _]|-/.test(String.fromCharCode(tecla));
                return letra;
            });
        },

        NumerosLetrasSin: function () {
            $(".numerosletrassin").unbind("keypress").keypress(function (event) {
                var tecla = (document.all) ? event.keyCode : event.which;
                var letra = /[0-9 A-Z a-z & @ . _]|-/.test(String.fromCharCode(tecla));
                return letra;
            });
        },

        NumerosLetras2: function () {
            $(".numerosletras2").unbind("keypress").keypress(function (event) {
                var tecla = (document.all) ? event.keyCode : event.which;
                var letra = /[A-Z a-z ñ]|-/.test(String.fromCharCode(tecla));
                return letra;
            });
        },
        BtnCotizadores: function () {
            $("[name=BtnCotizadores]").click(function () {
                Cotizador.Parametros.cAgrupador = $(this).attr("cAgrupador");
                $("#CmbTipoCotizador").val($(this).attr("nTipoCot")).trigger("change");
                $("#BtnIniciar").trigger("click");
				
				
                console.log(Cotizador.Parametros.cAgrupador);
                if (Cotizador.Parametros.cAgrupador == "Fronterizos y Legalizados (Por Decreto)") {

                    // Activa  ChkSalvamento y lo oculta
                    $('#ChkSalvamento').iCheck('check').trigger('change');
                    $('#div_Salvamento').hide();

                    //Activa bandera para que se deprecie 25% en lugar de 50%

                    Cotizador.Parametros.legfront_chocolate = true;


                    //Oculta la opción de fronterizos
                    var selectElement = document.getElementById("CmbTipoFronLeg");
                    selectElement.value = "2";
                    selectElement.disabled = true;


                    //Desactiva el pointer al checkbox ChkSeriePrecio

                    $("#switch--2").css("pointer-events", "none");

                }
				
            });
        },
        BtnCotizar2: function () {
            $("#BtnCotizar2").unbind("click").click(function () {
                if (Cotizador.CotizarGeneral()) {
                    ASHT.MensajeSimple(Cotizador.Parametros.Mensaje, "::Advertencia::", "", "auto", "auto");
                } else {
                    //$("#BtnComprar").attr('disabled', false).removeClass('ui-state-disabled');
                }
            });
        },
        TxtValorFactura: function () {
            $("#TxtValorFactura").focusout(function () {
                Cotizador.GuardarSumaAsegurada(this);
                var num = $(this).val().replace(/\,/g, '');
                if (!isNaN(num)) {
                    num = num.toString().split('').reverse().join('').replace(/(?=\d*\,?)(\d{3})/g, '$1,');
                    num = num.split('').reverse().join('').replace(/^[\,]/, '');
                    $(this).val(num);
                }
            });
        },
        TxtValorFactura2: function () {
            $("#TxtValorFactura2").focusout(function () {
                Cotizador.GuardarSumaAsegurada(this);
                var num = $(this).val().replace(/\,/g, '');
                if (!isNaN(num)) {
                    num = num.toString().split('').reverse().join('').replace(/(?=\d*\,?)(\d{3})/g, '$1,');
                    num = num.split('').reverse().join('').replace(/^[\,]/, '');
                    $(this).val(num);
                }
            });
        },
        TxtValorFactura3: function () {
            $("#TxtValorFactura3").focusout(function () {
                Cotizador.GuardarSumaAsegurada(this);
                var num = $(this).val().replace(/\,/g, '');
                if (!isNaN(num)) {
                    num = num.toString().split('').reverse().join('').replace(/(?=\d*\,?)(\d{3})/g, '$1,');
                    num = num.split('').reverse().join('').replace(/^[\,]/, '');
                    $(this).val(num);
                }
            });
        },
        TxtValorFactura4: function () {
            $("#TxtValorFactura4").focusout(function () {
                Cotizador.GuardarSumaAsegurada(this);
                var num = $(this).val().replace(/\,/g, '');
                if (!isNaN(num)) {
                    num = num.toString().split('').reverse().join('').replace(/(?=\d*\,?)(\d{3})/g, '$1,');
                    num = num.split('').reverse().join('').replace(/^[\,]/, '');
                    $(this).val(num);
                }
            });
        },
        TxtValorFactura5: function () {
            $("#TxtValorFactura5").focusout(function () {
                Cotizador.GuardarSumaAsegurada(this);
                var num = $(this).val().replace(/\,/g, '');
                if (!isNaN(num)) {
                    num = num.toString().split('').reverse().join('').replace(/(?=\d*\,?)(\d{3})/g, '$1,');
                    num = num.split('').reverse().join('').replace(/^[\,]/, '');
                    $(this).val(num);
                }
            });
        },
        //[Tipos Indemnizacion]
        SumaAseguradaVeh: function () {
            $("[name=SumaAseguradaVeh]").focusout(function () {
                var num = $(this).val().replace(/\,/g, '');
                if (!isNaN(num)) {
                    num = num.toString().split('').reverse().join('').replace(/(?=\d*\,?)(\d{3})/g, '$1,');
                    num = num.split('').reverse().join('').replace(/^[\,]/, '');
                    $(this).val(num);
                }

                num = $(this).val().replace(/\,/g, '');

                var nValorPivote = 0;
                var nLimInf = 0;
                var nLimSup = 0;
                if ($(this).attr("tipoValor") == "VF") {
                    nValorPivote = Cotizador.Parametros.nValorVehiculo * (1 + (Cotizador.Parametros.nValorPivoteVF / 100)) * (1 - Cotizador.Parametros.nDepreciacionUso / 100);
                    nLimInf = Math.round(nValorPivote * (1 + (Cotizador.Parametros.nlimInferiorVF / 100)));
                    nLimSup = Math.round(nValorPivote * (1 + (Cotizador.Parametros.nlimSuperiorVF / 100)));
                } else if ($(this).attr("tipoValor") == "VC") {
                    nValorPivote = (Cotizador.Parametros.nValorVehiculo * (1 + (Cotizador.Parametros.nValorPivoteVC / 100))) * (1 - Cotizador.Parametros.nDepreciacionUso / 100);
                    nLimInf = Math.round(nValorPivote * (1 + (Cotizador.Parametros.nlimInferiorVC / 100)));
                    nLimSup = Math.round(nValorPivote * (1 + (Cotizador.Parametros.nlimSuperiorVC / 100)));
                }
                
                if (num >= nLimInf && num <= nLimSup) {
                    Cotizador.GuardarSumaAsegurada(this);
                    $(this).removeClass("ui-state-error ui-state-error-text");
                } else {
                    var limInf = (nLimInf).toString().split('').reverse().join('').replace(/(?=\d*\,?)(\d{3})/g, '$1,').split('').reverse().join('').replace(/^[\,]/, '')
                    var limSup = (nLimSup).toString().split('').reverse().join('').replace(/(?=\d*\,?)(\d{3})/g, '$1,').split('').reverse().join('').replace(/^[\,]/, '')
                    ASHT.MensajeSimple("Suma Asegurada fuera del rango permitido (" + limInf + " - " + limSup + ")", "::Advertencia::", "", "auto", "auto");
                    $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                }
            });
        },
        TxtBuscaVehiculo: function () {
            $("#TxtBuscaVehiculo").autocomplete({
                minLength: 0,
                source: function (request, response) {
                    $(this).addClass("ui-autocomplete-loading");
                    $.ajax({
                        type: 'POST',
                        url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                        data: {
                            servicio: "ConsultaVehiculoBusqueda",
                            nIdNegocioGrupo: Cotizador.Parametros.nIdNegocioGrupo,
                            nTipoNegocio: Cotizador.Parametros.nTipoCotizador,
                            cAgrupador: Cotizador.Parametros.cAgrupador,
                            cadena: request.term,
                            ccAgente: Cotizador.Parametros.ccAgente,
                            cLogCor: ASHT.GetUrlParam("tokencor")[0]
                        },
                        success: function (data) {
                            jQuery.globalEval(data);
                            console.log(arrVehiculos);
                            console.log(arrVehiculos.length);
                            response(arrVehiculos);
                        },
                        timeout: 50000,
                        dataType: "text",
                        async: true
                    });
                },
                select: function (event, ui) {
                    $("#CmbTipoVehiculo").val(ui.item.cTipo).trigger("change");
                    $("#CmbModelo").val(ui.item.cModelo).trigger("change");
                    $("#CmbMarca").val(ui.item.cClaveArmadora).trigger("change");
                    $("#CmbSubMarca").val(ui.item.nGrupoEstadistico).trigger("change");
                    $("#CmbVersion").val(ui.item.cAmis).trigger("change");
                },
                open: function () {
                    $("ul.ui-autocomplete").removeClass("ui-corner-all").addClass("ui-corner-bottom").scrollTop(0);
                },
                close: function () {
                    $(this).removeClass("ui-autocomplete-loading");
                }
            });
        },

        TxtBuscaMoto: function () {
            $("#TxtBuscaMoto").autocomplete({
                minLength: 0,
                source: function (request, response) {
                    $(this).addClass("ui-autocomplete-loading");
                    $.ajax({
                        type: 'POST',
                        url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                        data: {
                            servicio: "ConsultaMotoBusqueda",
                            nIdNegocioGrupo: Cotizador.Parametros.nIdNegocioGrupo,
                            nTipoNegocio: Cotizador.Parametros.nTipoCotizador,
                            cAgrupador: Cotizador.Parametros.cAgrupador,
                            cadena: request.term,
                            ccAgente: Cotizador.Parametros.ccAgente,
                            cLogCor: ASHT.GetUrlParam("tokencor")[0]
                        },
                        success: function (data) {
                            jQuery.globalEval(data);
                            console.log(arrVehiculos);
                            console.log(arrVehiculos.length);
                            response(arrVehiculos);
                        },
                        timeout: 50000,
                        dataType: "text",
                        async: true
                    });
                },
                select: function (event, ui) {
                    //$("#CmbTipoVehiculo").val(ui.item.cTipo).trigger("change");
                    $("#CmbModeloM").val(ui.item.cModelo).trigger("change");
                    $("#CmbMarcaMoto").val(ui.item.cClaveArmadora).trigger("change");
                    $("#CmbCarroceriaMoto").val(ui.item.nCarroceria).trigger("change");
                    $("#CmbSubMarcaMoto").val(ui.item.nGrupoEstadistico).trigger("change");
                    $("#CmbVersionMoto").val(ui.item.cAmis).trigger("change");
                },
                open: function () {
                    $("ul.ui-autocomplete").removeClass("ui-corner-all").addClass("ui-corner-bottom").scrollTop(0);
                },
                close: function () {
                    $(this).removeClass("ui-autocomplete-loading");
                }
            });
        },

        TxtBuscaCP: function () {
            $("#TxtBuscaCP").autocomplete({
                minLength: 0,
                source: function (request, response) {
                    $(this).addClass("ui-autocomplete-loading");
                    $.ajax({
                        type: 'POST',
                        url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                        data: {
                            servicio: "ConsultaCodigo",
                            cadena: request.term,
                            ccAgente: Cotizador.Parametros.ccAgente,
                            cTokenCor: ASHT.GetUrlParam("tokencor")[0],
                            DataGuide: Cotizador.Parametros.DataGuide
                        },
                        success: function (data) {
                            jQuery.globalEval(data);
                            console.log(arrCodigos);
                            console.log(arrCodigos.length);
                            response(arrCodigos);
                        },
                        timeout: 50000,
                        dataType: "text",
                        async: true
                    });
                },
                select: function (event, ui) {
                    $("#CmbEstado").val(ui.item.nEstado).trigger("change");
                    $("#CmbMunicipio").val(ui.item.nMunicipio).trigger("change");
                    $("#cCodigo").val(ui.item.cCodigo).trigger("change");
                },
                open: function () {
                    $("ul.ui-autocomplete").removeClass("ui-corner-all").addClass("ui-corner-bottom").scrollTop(0);
                },
                close: function () {
                    $(this).removeClass("ui-autocomplete-loading");
                }
            }).focusout(function () {
                var Mensaje = "";
                //if ($("#CmbEstado").val() == 0) {
                if ($(this).val().length == 5) {
                    var _this = this;
                    $.ajax({
                        type: 'POST',
                        url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                        data: {
                            servicio: "ConsultaCodigo",
                            cadena: $(_this).val(),
                            ccAgente: Cotizador.Parametros.ccAgente,
                            cTokenCor: ASHT.GetUrlParam("tokencor")[0],
                            DataGuide: Cotizador.Parametros.DataGuide
                        },
                        success: function (data) {
                            jQuery.globalEval(data);

                            if (arrCodigos.length > 0) {
                                $("#CmbEstado").val(arrCodigos[0].nEstado).trigger("change");
                                $("#CmbMunicipio").val(arrCodigos[0].nMunicipio).trigger("change");
                                $("#cCodigo").val(arrCodigos[0].cCodigo).trigger("change");
                            } else {
                                Mensaje = "Código Postal no válido";
                            }
                            if (Mensaje != "") {
                                ASHT.MensajeSimple(Mensaje, "::Advertencia::", "", "auto", "auto");
                            }
                        },
                        timeout: 50000,
                        dataType: "text",
                        async: true
                    });
                } else {
                    Mensaje = "Código Postal no válido";
                }
                //} 

                if (Mensaje != "") {
                    ASHT.MensajeSimple(Mensaje, "::Advertencia::", "", "auto", "auto");
                }
            });
        },
        BtnCambiar: function () {
            $("[name=BtnCambiar]").unbind("click").click(function () {
                var _this = this;
                var Requerido;
                if (Cotizador.Parametros.cLlaveGrupoNegocio == "a789e5b0a3c940908ec5f74153b50418" && $(_this).val() == "Comprar" ) {
                    window.location.href = "https://server.anaseguros.com.mx/Micrositios/EXATECCOR/Cotizador.html?pRegistro=1&tokentec=" + ASHT.GetUrlParam("tokentec")[0];
                } else {

                    if ($(_this).val() == "Anterior") {
                        Requerido = false;
                        if ($(_this).attr("siguiente") == "FrmConductor") {
                            $("#CmbDomiciliar").val('0');
                        }
                        if ($(_this).attr("siguiente") == "FrmEstado") {
                            Cotizador.Parametros.bPuedeCotizar = false;
                        }
                        if ($(_this).attr("siguiente") == "FrmPlan") {
                            $("#CmbMetodoPago3").val("0").trigger("change");
                        }
                    } else {
                        Requerido = Cotizador.ValidaRequeridos("#" + $(_this).attr("actual"));
                    }

                    if ($(_this).attr("id") == "BtnVehiculo" && Cotizador.Parametros.nAdaptaciones != 0 && !Requerido) {
                        Requerido = Cotizador.ValidaAdaptaciones();
                    }

                    if ($(_this).attr("id") == "BtnVehiculo" && Cotizador.Parametros.nEquipoEspecial != 0 && !Requerido) {
                        Requerido = Cotizador.ValidaEquipoEspecial();
                    }

                    if (!Requerido) {
                        if ($(_this).attr("id") == "BtnIniciar") {
                            //Cotizador.GuardarCampoGeo(Cotizador.Parametros.GeoLatitud, "cLatitud");
                            //Cotizador.GuardarCampoGeo(Cotizador.Parametros.GeoLongitud, "cLongitud");
                        }

                        if ($(_this).attr("id") == "BtnCotizar") {
                            Cotizador.ValidaGPS();
                            Cotizador.ValidaIFV();
                            //[Proyecto Deducibles min y restricciones]
                            Cotizador.ValidaDYR();

                            if (Cotizador.Parametros.cLlaveGrupoNegocio == "205cb81b52684a608ffff9d74e1ea159") {
                                window.dataLayer = window.dataLayer || [];
                                dataLayer.push({
                                    'event': 'CotizacionFinalizada'
                                });
                            }							
                            Cotizador.Parametros.bPuedeCotizar = true;
                            Requerido = Cotizador.CotizarGeneral();

                            if ($("#CmbMarca").val() == "C00") {
                                $("[cSISEPlan=01]").hide();
                                $("[cSISEPlan=03]").hide();
                            }

                            //if (Cotizador.Parametros.nTipoCotizador == 2 && $("#TxtValorFactura").val() == 0){
                            //    $("[cSISEPlan=01]").hide();
                            //    $("[cSISEPlan=03]").hide();
                            //}
                        }

                        if ($(_this).attr("id") == "BtnEstado") {
							
							Cotizador.CampoAdicional();

							
                            Cotizador.ConstruyeCoberturas();

                            if ($("#CmbTipoCotizador").val() == "2") {
                                Cotizador.ActivarValorConvenidoMotos();
                            }
                                                        //[Proyecto IFV]                            
                        }

                        if ($(_this).attr("id") == "BtnEnviarCorreo") {
                            if ($("#cConfirmarCorreo").is(":visible")) {
                                if ($("#cConfirmarCorreo").val() != $("#cCorreo").val()) {
                                    alert('El correo debe ser el mismo en ambos campos.');
                                    Requerido = true;
                                }

                                if ($("#ChkAcuerdo3").is(":checked")) {
                                } else {
                                    alert('Tiene que estar de acuerdo con nuestro aviso de privacidad.');
                                    Requerido = true;
                                }

                                if (!Requerido) {
                                    Cotizador.EnviaCorreoActE();
                                }
                            }
                        }
                        if ($(_this).attr("id") == "BtnComprar") {
                            //if ($("input[type=radio][nGuardar=2][cSISEPlan=04]").is(":checked")) {
                            var bBanderaCot = true;

                            $.ajax({
                                type: 'POST',
                                url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                                data: {
                                    servicio: "ValidaUserEmision",
                                    cLogCor: ASHT.GetUrlParam("tokencor")[0]
                                },
                                success: function (data) {
                                    jQuery.globalEval(data);

                                    bBanderaCot = bBanderaResp;
                                },
                                timeout: 50000,
                                dataType: "text",
                                async: false
                            });

                            if (bBanderaCot) {
                                Cotizador.LLenarCombos("#nRegimenDF");
                                var valSelect = $('input[type=radio][nGuardar=2]:checked').val();

                                Cotizador.Parametros.tokencotcheck = $("[name=ImgImpresion][nIdPlan=" + valSelect + "]").attr('cLlaveCot');
                                $.ajax({
                                    type: 'POST',
                                    url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                                    data: {
                                        servicio: "ValidaMSI",
                                        cLlave: Cotizador.Parametros.DataGuide,
                                        llavecheck: Cotizador.Parametros.tokencotcheck,
                                        cTokenCor: ASHT.GetUrlParam("tokencor")[0]
                                    },
                                    success: function (data) {
                                        jQuery.globalEval(data);
                                    },
                                    timeout: 50000,
                                    dataType: "text",
                                    async: false
                                });

                                $("#MSIPago").empty();
                                //$("#CmbMetodoPago3").val("0").trigger("change");

                                if (($("input[type=radio][nGuardar=2][cSISEPlan=04]").is(":checked")) || ($("input[type=radio][nGuardar=2][cSISEPlan=29]").is(":checked")) || ($("input[type=radio][nGuardar=2][cSISEPlan=30]").is(":checked")) || ($("#CmbTipoVehiculo").val() == 520 || Cotizador.Parametros.nTipoCotizador == 10)) {
                                    $("[name=DescripcionRC]").show();
                                    if ($("#CmbModelo").val() > 0) {
                                        $("#TxtModeloRC").val($("#CmbModelo").val());
                                        $("#TxtDescripcionRC").val($("#CmbVersion option:selected").text());
                                    }

                                    if ($("#CmbModeloM").val() > 0) {
                                        $("#TxtModeloRC").val($("#CmbModeloM").val());
                                        $("#TxtDescripcionRC").val($("#TxtVehiculo").val());
                                    }
                                } else {
                                    if (Cotizador.Parametros.nIdNegocioGrupo == 1290 || Cotizador.Parametros.nIdNegocioGrupo == 1310) {
                                        $("[name=DescripcionRC]").show();
                                        $("#TxtModeloRC").attr('disabled', true).addClass('ui-state-disabled');
                                        if ($("#CmbModeloMGen").val() > 0) {
                                            $("#TxtModeloRC").val($("#CmbModeloMGen").val());
                                            $("#TxtDescripcionRC").val($("#TxtVehiculoMotoGen").val());
                                        }
                                    } else {
                                        $("[name=DescripcionRC]").hide();
                                    }
                                }
                            } else {
                                Requerido = true;
                                ASHT.MensajeSimple('PARA EMITIR CONTACTE A SU ÁREA DE RH, ELLOS LO APOYARÁN CON ESTE PROCESO.', '::Advertencia::', '', '400', '200');
                                //alert('');
                            }

                            if (bBanderaCot && !Requerido) {
                                if (Cotizador.Parametros.cSerieGuerrero != "") {
                                    $.ajax({
                                        type: 'POST',
                                        url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                                        data: {
                                            servicio: "ValidaIFV",
                                            cSerie: Cotizador.Parametros.cSerieGuerrero
                                        },
                                        success: function (data) {
                                            jQuery.globalEval(data);
                                            Requerido = Estatus;
                                            if (!Estatus) {
                                                $("#TxtSerieCot").val(Cotizador.Parametros.cSerieGuerrero).trigger("focusout").attr('disabled', true).addClass('ui-state-disabled');
                                                $("#FrmAuto").hide();
                                            } else {
                                                $("#FrmAuto").hide();
                                            }
                                        },
                                        timeout: 50000,
                                        dataType: "text",
                                        async: false
                                    });
                                }
                            }
                        }

                        
                        if ($(_this).attr("actual") == "FrmConductor") {

                            //$.ajax({
                            //    type: 'POST',
                            //    url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                            //    data: {
                            //        servicio: "ValidaSitioCor",
                            //        nIdNegocioGrupo: Cotizador.Parametros.nIdNegocioGrupo
                            //    },
                            //    success: function (data) {
                            //        jQuery.globalEval(data);
                            //    },
                            //    timeout: 50000,
                            //    dataType: "text",
                            //    async: false
                            //});

                            if ($("#MSIPago").val() != "C" & $("#MSIPago").val() != "" & $("#MSIPago").val() != null) {
                                $("#nPrimerPagoLb").html("Total a pagar: $" + Cotizador.Parametros.nPrimerPago + " a " + $("#MSIPago").val() + " MSI");
                            } else {                                
                                if (Cotizador.Parametros.nSubsecuentes.length > 0) {
                                    $("#nPrimerPagoLb").html("Pago con tarjeta por: $" + Cotizador.Parametros.nPrimerPago);
                                    var info = "";
                                    if (Cotizador.Parametros.cNumPagos == "1") {
                                        info = "Resta " + Cotizador.Parametros.cNumPagos + " pago de $";
                                    } else {
                                        info = "Restan " + Cotizador.Parametros.cNumPagos + " pagos de $";
                                    }
                                    $("#nPagosSubsecuentesLb").html(info + Cotizador.Parametros.nSubsecuentes);
                                    $("#DvPagoSub").show();
                                } else {
                                    $("#nPrimerPagoLb").html("Total a pagar: $" + Cotizador.Parametros.nPrimerPago);
                                    $("#nPagosSubsecuentesLb").html("");
                                    $("#DvPagoSub").hide();
                                }
                            }

                            //    ************ DESARROLLO SEGURO DE VIDA NO NECESARIO
                            //if ($("[name=BeneficiarioVida]").is(":visible")) {
                            //    var nPorcentajeTotal = 0;
                            //    $("[name=Porcentaje]").each(function () {
                            //        nPorcentajeTotal += parseFloat($(this).val());
                            //    });

                            //    if (nPorcentajeTotal != 100) {
                            //        alert("El porcentaje total de distribucion en los beneficiarios debe ser del 100%, favor de revisar.");
                            //        Requerido = true;
                            //    }
                            //}
                        }

                        if ($(_this).attr("actual") == "FrmConductor") {
                            $.ajax({
                                type: 'POST',
                                url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                                data: {
                                    servicio: "ValidaSitioCor",
                                    nIdNegocioGrupo: Cotizador.Parametros.nIdNegocioGrupo
                                },
                                success: function (data) {
                                    jQuery.globalEval(data);
                                    if (Cotizador.Parametros.bCheckSitioCor) {
                                        if ($("#CmbMetodoPago3").val() != "0") {
                                            if ($("#CmbMetodoPago3").val() != "3") { //Referenciado
                                                $('#DvDatosBCor').show();
                                            } else {
                                                $('#DvDatosBCor').hide();
                                            }
                                        }
                                    }
                                },
                                timeout: 50000,
                                dataType: "text",
                                async: false
                            });
                        }

                        if ($(_this).attr("siguiente") == "FrmEstado") {
                            //Check box ABC Leasing
                            if (Cotizador.Parametros.nIdNegocioGrupo == 141 || Cotizador.Parametros.nIdNegocioGrupo == 1167 || Cotizador.Parametros.nIdNegocioGrupo == 1168 || Cotizador.Parametros.nIdNegocioGrupo == 1169) {
                                if ($("#CmbTipoVehiculo").val() == "210" || $("#CmbTipoVehiculo").val() == "220") {
                                    $("[name=ABCSinTipoCarga]").show();
                                    //Cotizador.Parametros.bTextoABC = "1";
                                } else {
                                    //Cotizador.Parametros.bTextoABC = "0";
                                    $("[name=ABCSinTipoCarga]").hide();
                                    $("#ChkTextoABC").iCheck("uncheck").trigger("on");
                                }
                            }

                            $.ajax({
                                type: 'POST',
                                url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                                data: {
                                    servicio: 'ValidaEstadoVehiculo',
                                    DataGuide: Cotizador.Parametros.DataGuide
                                }, success: function (data) {
                                    jQuery.globalEval(data);

                                },
                                timeout: 50000,
                                dataType: "text",
                                async: false
                            });


                            if (Cotizador.Parametros.nIdNegocio == 6605 || Cotizador.Parametros.nIdNegocio == 6608 || Cotizador.Parametros.nIdNegocio == 6610 || Cotizador.Parametros.nIdNegocio == 6611) {
                                $('#BtnDialogGuardar').hide();
                                if (!Cotizador.Parametros.bRecuperaGuerrero) {
                                    $("#DvClienteGuerrero").show();
                                    $('#BtnComprar').attr('disabled', true).addClass('ui-state-disabled');
                                    $("#BtnComprar").hide();
                                }
                            }
                        }

                        if (!Requerido) {
                            $("#" + $(_this).attr("actual")).hide("fade", 500);
                            setTimeout(function () {
                                window.scrollTo(0, 0);
                                $("#" + $(_this).attr("siguiente")).show("fade", 500);
                                if ($(_this).attr("siguiente") == "FrmTipoCotizador") {
                                    location.reload(true);
                                }
                            }, 500);
                        } else {
                            if (Cotizador.Parametros.Mensaje != "") {
                                ASHT.MensajeSimple(Cotizador.Parametros.Mensaje, "::Advertencia::", "", "auto", "auto");
                                Cotizador.Parametros.Mensaje = "";
                            }
                        }
                    }
                }
                
            });
        },
        nTipoPersona: function () {
            $("#nTipoPersona").change(function () {
                $("[name=TipoPersona]").hide();
                $("[name=TipoPersona][nTipoPersona=" + $(this).val() + "]").show();

                $("[name=TipoPersona]").find("[nGuardar=1]").each(function () {
                    $(this).removeClass("Requerido");
                });

                $("[name=TipoPersona][nTipoPersona=" + $(this).val() + "]").find("[nGuardar=1]").each(function () {
                    $(this).addClass("Requerido");
                });
                Cotizador.LLenarCombos("#nRegimenDF");
                //[Ajuste Operaciones]
                if ($("#nTipoPersona").val() == "1") {
                    $("#TextPMoral").hide();
                    $("#cRazonSocial").val($("#cNombre").val() + " " + $("#cApaterno").val() + " " + $("#cAmaterno").val());
                    if ($("#ChkClienteDF").is(":checked")) {
                        $("#cRazonSocial").attr('disabled', true).addClass('ui-state-disabled');
                    }
                    $("#cRFC").attr("maxlength", "13");
                } else {
                    $("#TextPMoral").show();
                    $("#cRazonSocial").val($("#cEmpresa").val());
                    if ($("#ChkClienteDF").is(":checked")) {
                        $("#cRazonSocial").attr('disabled', false).removeClass('ui-state-disabled');
                    }
                    $("#cRFC").attr("maxlength", "12");
                }
            });
        },
        cCargaDF: function () {
            $("#cCargaDF").change(function () {
                if ($("#cCargaDF").val() == "S") {
                    $("[name=DvDatosFiscales]").show();
                } else {
                    $("[name=DvDatosFiscales]").hide();
                }				
            });
        },
        GuardarCampo: function () {
            $("select[nGuardar=1]").unbind("change").change(function () {
                Cotizador.GuardarCampo(this);

                if ($(this).attr("name") == "nCategoria") {
                    var _this = this;
                    Cotizador.ConsultaNegocio($(this).val());
                    if (parseInt($(this).val()) >= 200 && parseInt($(this).val()) <= 270) {
                        $("[name=TipoCarga]").show();
                    } else {
                        $("[name=TipoCarga]").hide();
                        $("#CmbTipoCarga").val("0");
                        $("#TxtDescripcionCarga").val("");
                    }
                    //if (Cotizador.Parametros.nIdNegocioGrupo == 248){
                    //	$("[name=TipoCarga]").hide();	
                    //}
                }
                if ($(this).attr("name") == "cMetodoPago") {
                    $.ajax({
                        type: 'POST',
                        url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                        data: {
                            servicio: 'ConsultaFP',
                            cLlave: Cotizador.Parametros.DataGuide
                        }, success: function (data) {
                            jQuery.globalEval(data);

                        },
                        timeout: 50000,
                        dataType: "text",
                        async: false
                    });
                }
                if (typeof $(this).attr("nTipo") !== "undefined") {
                    Cotizador.LLenarCombos($(this).attr("cCombo"));
                }

                var FechaAct = new Date();
                switch ($(this).attr("id")) {
                    case "CmbTipoVehiculo":
                        if ($('#CmbTipoVehiculo').val() == 300 || $('#CmbTipoVehiculo').val() == 500 || $('#CmbTipoVehiculo').val() == 520) {
                            Cotizador.ConsultaNegocio($('#CmbTipoVehiculo').val());
                            var Prueba = Cotizador.Parametros.ccAgente
                            $.ajax({
                                type: 'POST',
                                url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                                data: {
                                    servicio: 'ValidaPlanes',
                                    ccAgente: Cotizador.Parametros.ccAgente,
                                    nIdNegocio: Cotizador.Parametros.nIdNegocio
                                }, success: function (data) {
                                    jQuery.globalEval(data);

                                },
                                timeout: 50000,
                                dataType: "text",
                                async: false
                            });

                        }
                        if ($('#CmbTipoVehiculo').val() == 100 && Cotizador.Parametros.nTipoCotizador == 10) {
                            Cotizador.ConsultaNegocio($('#CmbTipoVehiculo').val());
                            var Prueba = Cotizador.Parametros.ccAgente
                            $.ajax({
                                type: 'POST',
                                url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                                data: {
                                    servicio: 'ValidaPlanesTesla',
                                    ccAgente: Cotizador.Parametros.ccAgente,
                                    nIdNegocio: Cotizador.Parametros.nIdNegocio
                                }, success: function (data) {
                                    jQuery.globalEval(data);

                                },
                                timeout: 50000,
                                dataType: "text",
                                async: false
                            });
                        }
                        if (Cotizador.Parametros.nTipoCotizador == 11) {
                            Cotizador.ConsultaNegocio($('#CmbTipoVehiculo').val());
                            var Prueba = Cotizador.Parametros.ccAgente
                            $.ajax({
                                type: 'POST',
                                url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                                data: {
                                    servicio: 'ValidaPlanesTractos',
                                    ccAgente: Cotizador.Parametros.ccAgente,
                                    nIdNegocio: Cotizador.Parametros.nIdNegocio
                                }, success: function (data) {
                                    jQuery.globalEval(data);

                                },
                                timeout: 50000,
                                dataType: "text",
                                async: false
                            });
                        }
                    case "CmbTipoVehiculoFL":
                        Cotizador.LLenarCombos("[name=cVigencia]");
                        Cotizador.LLenarCombos("#CmbServicio");
                        Cotizador.LLenarCombos("#CmbUso");

                        if (parseInt($(this).val()) == 150) {
                            //$("#DvGeneral").hide();
                            //$("#DvDescripcion").show();
                        } else {
                            $("#DvGeneral").show();
                            $("#DvDescripcion").hide();
                        }

                        if (parseInt($(this).val()) == 230) {
                            //$("#CmbTipoCarga").val("A").trigger("change").attr('disabled', true).addClass('ui-state-disabled');
                        } else {
                            $("#CmbTipoCarga").attr('disabled', false).removeClass('ui-state-disabled');
                        }

                        if (Cotizador.Parametros.nTipoCotizador == 4) {
                            $("#TxtSumaSS").trigger("focusout");
                        }
                        break;

                    case "CmbEstado":                        
                        var nEstado = $(this).val();
                        //Cotizador.ValidaIFV(nEstado);
                        //Cotizador.ConstruyeCoberturas();
                        if (nEstado == 19 || nEstado == 2 || nEstado == 26 || nEstado == 5 || nEstado == 8 || nEstado == 28) {
                            $("[name=DatosConductor]").find("input, select").each(function () {
                                $(this).addClass("Requerido");
                            });
                            //$("[cSISE=37]").iCheck('check').iCheck('disable');
                            $("[name=DatosConductor]").find("label").each(function () {
                                $(this).html("* " + $(this).html());
                            });
                            //RC USA
                            //if ($("#CmbUso").val() != "29" && $("#CmbUso").val() != "84") {
                            if (Cotizador.Parametros.MostrarRCUSA && Cotizador.Parametros.RCUSAObligatoria) {
                                $("[cSISE=27][cSISEPlan=01]").iCheck('check');
                                $("[cSISE=27][cSISEPlan=01]").iCheck('disable');
                                $("[cSISE=27][cSISEPlan=02]").iCheck('check');
                                $("[cSISE=27][cSISEPlan=02]").iCheck('disable');
                                $("[cSISE=27][cSISEPlan=03]").iCheck('check');
                                $("[cSISE=27][cSISEPlan=03]").iCheck('disable');
                                $("[cSISE=27][cSISEPlan=04]").iCheck('check');
                                $("[cSISE=27][cSISEPlan=04]").iCheck('disable');
                                $("[cSISE=27][cSISEPlan=29]").iCheck('check');
                                $("[cSISE=27][cSISEPlan=29]").iCheck('disable');
                            }
                        } else {
                            $("[name=DatosConductor]").find("input, select").each(function () {
                                $(this).removeClass("Requerido");
                            });
                            $("[name=DatosConductor]").find("label").each(function () {
                                $(this).html($(this).html().replace("* ", ""));
                            });
                            //RC USA no fronterizos quita el disabled
                            //$("[cSISE=27][cSISEPlan=01]").iCheck('enable');

                            $.ajax({
                                type: 'POST',
                                url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                                data: {
                                    servicio: 'ConsultaRCUSA',
                                    cTokenCor: ASHT.GetUrlParam("tokencor")[0],
                                    nIdNegocio: Cotizador.Parametros.nIdNegocio,
                                }, success: function (data) {
                                    jQuery.globalEval(data);

                                },
                                timeout: 50000,
                                dataType: "text",
                                async: false
                            });

                            if (!Cotizador.Parametros.MostrarRCUSA) {
                                //$("[cSISE=27][cSISEPlan=01]").iCheck('disable');
                                $("[cSISE=27]").hide();
                            } else {
                                $("[cSISE=27]").show();
                                //if (Cotizador.Parametros.RCUSAObligatoria) {
                                //    $("[cSISE=27][cSISEPlan=01]").iCheck('check').iCheck('disable').trigger("on");
                                //    $("[cSISE=27][cSISEPlan=02]").iCheck('check').iCheck('disable').trigger("on");
                                //    $("[cSISE=27][cSISEPlan=03]").iCheck('check').iCheck('disable').trigger("on");
                                //    $("[cSISE=27][cSISEPlan=04]").iCheck('check').iCheck('disable').trigger("on");
                                //    $("[cSISE=27][cSISEPlan=29]").iCheck('check').iCheck('disable').trigger("on");
                                //}
                            }
                        }
                        break;
                    case "CmbMunicipio":
                        $("#cCodigo").val("").trigger("change");
                        $("#cCodigo").val("0");

                        $.ajax({
                            type: 'POST',
                            url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                            data: {
                                servicio: 'ValidaEstadoVehiculo',
                                DataGuide: Cotizador.Parametros.DataGuide,
                                nIdNegocio: Cotizador.Parametros.nIdNegocio
                            }, success: function (data) {
                                jQuery.globalEval(data);

                            },
                            timeout: 50000,
                            dataType: "text",
                            async: false
                        });
                        
                        break;
                    case "CmbDerecho":
                        $("#CmbDerecho2").val($(this).val());
                        break;
                    case "CmbVigencia":
                        $("#CmbVigenciaPlan2").val($(this).val());
                        Cotizador.LLenarCombos("#CmbMetodoPago3");
                        switch ($(this).val()) {
                            case "0":
                            case "1":
                                break;
                            default:
                                break;
                        }

                        switch ($(this).val()) {
                            case "1":
                            case "45":
                            case "46":
                                if (!$("#TxtDescuento").is(":visible")) {
                                    $("#TxtDescuento").val(Cotizador.Parametros.nDescuento).trigger("focusout");
                                }
                                break;
                            default:
                                if (!$("#TxtDescuento").is(":visible")) {
                                    $("#TxtDescuento").val(Cotizador.Parametros.nDescuento2).trigger("focusout");
                                }
                                break;
                        }
                        break;

                    case "CmbMetodoPago":
                        $("#cMetodoPago2").val($(this).val());
                        break;
                    case "CmbDescuento":
                        $("#CmbDescuento2").val($(this).val());
                        break;
                    case "CmbDerecho2":
                        $("#CmbDerecho").val($(this).val());
                        $("[name=PrimaTotal]").html("Modificando...");
                        $("#BtnComprar").attr('disabled', true).addClass('ui-state-disabled');
                        $("#BtnCotizar2").trigger("click");
                        break;
                    case "CmbVigenciaPlan2":
                        $("#CmbVigencia").val($(this).val());
                        $("[name=PrimaTotal]").html("Modificando...");
                        $("#BtnComprar").attr('disabled', true).addClass('ui-state-disabled');
                        //$("#BtnCotizar2").trigger("click");
                        Cotizador.LLenarCombos("[name=cMetodoPago]");
                        Cotizador.LLenarCombos("#CmbMetodoPago3");
                        switch ($(this).val()) {
                            case "1":
                            case "45":
                            case "46":
                                if (!$("#TxtDescuento2").is(":visible")) {
                                    $("#TxtDescuento2").val(Cotizador.Parametros.nDescuento).trigger("focusout");
                                }
                                break;
                            default:
                                if (!$("#TxtDescuento2").is(":visible")) {
                                    $("#TxtDescuento2").val(Cotizador.Parametros.nDescuento2).trigger("focusout");
                                }
                                break;
                        }

                        switch ($(this).val()) {
                            case "0":
                            case "1":
                                break;
                            default:
                                $("#CmbMetodoPago").val("C").trigger("change");
                                $("#cMetodoPago2").trigger("change");
                                break;
                        }

                        break;
                    case "cMetodoPago2":
                        $("#CmbMetodoPago").val($(this).val());
                        $("[name=PrimaTotal]").html("Modificando...");
                        $("#BtnComprar").attr('disabled', true).addClass('ui-state-disabled');
                        $("#BtnCotizar2").trigger("click");
                        break;
                    case "CmbDescuento2":
                        $("#CmbDescuento").val($(this).val());
                        $("[name=PrimaTotal]").html("Modificando...");
                        $("#BtnComprar").attr('disabled', true).addClass('ui-state-disabled');
                        $("#BtnCotizar2").trigger("click");
                        break;
                    case "CmbModelo":
                    case "CmbModeloM":
                        /*if (FechaAct.getFullYear() <= $(this).val()) {*/
                        if (FechaAct.getFullYear() <= $(this).val() || ($(this).val() == FechaAct.getFullYear() - 1 && FechaAct.getMonth() < 3)) {
                            switch (Cotizador.Parametros.nFactura) {
                                case 0:
                                    $("[name=ValorFactura]").hide();
                                    break;
                                case 1:
                                    $("[name=ValorFactura]").show();
                                    break;
                                case 2:
                                    $("[name=ValorFactura]").show();
                                    $("#ChkValorFactura").iCheck('check').trigger("on");
                                    break;
                                case 3:
                                    $("[name=ValorFactura]").show();
                                    $("#ChkValorFactura").iCheck('check').iCheck('disable').trigger("on");
                                    break;
                            }
                            $("[cSISE=39]").show();
                            $("[cSISE=36]").hide();
                            $("[name=ValorConvenido]").hide();

                            if ($("#ChkValorConvenido").val() == 1) {
                                $("#ChkValorConvenido").iCheck('uncheck');
                                //Cotizador.CambiaValorFactura();
                            }
                        } else {
                            switch (Cotizador.Parametros.nConvenido) {
                                case 0:
                                    $("[name=ValorConvenido]").hide();
                                    break;
                                case 1:
                                    $("[name=ValorConvenido]").show();
                                    break;
                                case 2:
                                    $("[name=ValorConvenido]").show();
                                    $("#ChkValorConvenido").iCheck('check').trigger("on");
                                    break;
                                case 3:
                                    $("[name=ValorConvenido]").show();
                                    $("#ChkValorConvenido").iCheck('check').iCheck('disable').trigger("on");
                                    break;
                            }
                            if ((FechaAct.getFullYear() - 10) < $("#CmbModelo").val()) {
                                $("[cSISE=33]").show();
                            } else {
                                $("[cSISE=33]").hide();
                            }
                            if ((FechaAct.getFullYear() - 10) <= $("#CmbModelo").val()) {
                                $("[cSISE=36]").show();
                                $("[cSISE=39]").hide();
                            } else {
                                $("[cSISE=36]").hide();
                                $("[cSISE=39]").hide();
                            }
                            //if ((FechaAct.getFullYear() - 10) < $("#CmbModelo").val()) {
                            //    $("[cSISE=33]").show();
                            //    $("[cSISE=36]").show();
                            //    $("[cSISE=39]").hide();
                            //} else {
                            //    $("[cSISE=33]").hide();
                            //    $("[cSISE=39]").hide();
                            //    $("[cSISE=36]").hide();
                            //}
                            $("[name=ValorFactura]").hide();
                            var ChkVF = $("#ChkValorFactura").val();
                            if ($("#ChkValorFactura").val() == 1) {
                                $("#ChkValorFactura").iCheck('uncheck');
                                //Cotizador.CambiaValorFactura();
                            }
                        }
                        //if (FechaAct.getFullYear() > $("#CmbModelo").val()) {
                          
                        //} else {
                          
                        //}
                        break;
                    case "CmbModeloMGen":
                        $("[name=ValorFactura]").hide();
                        //if (FechaAct.getFullYear() > $(this).val()) {
                        //    $("#LblValorFactura").html("Valor Convenido");
                        //} else {
                        //    $("#LblValorFactura").html("Valor Factura");
                        //}
                        //Cotizador.CambiaValorFactura();
                        break;
                    case "CmbMarca":
                        if (Cotizador.Parametros.nTipoCotizador == 11) {
                            //$("#DvGeneral").hide();
                            $("#DvDescripcion").show();                            
                        } else {
                            if ($(this).val() == "C00") {
                                $("#DvGeneral").hide();
                                $("#DvDescripcion").show();
                            } else {
                                if ($("#CmbTipoVehiculo").val() != 150) {
                                    $("#DvGeneral").show();
                                    $("#DvDescripcion").hide();
                                }
                            }
                        }
                        break;
                    case "CmbVersionMotoGen":
                        Cotizador.ConsultaValorMaximo(); 
                        break;
                    case "CmbMetodoPago3":

                        if ($("#CmbMetodoPago3").val() == "0") {
                            $("[name=DomiciliarTarjeta]").hide();
                            $("[name=DatosTarjeta]").hide();
                            $("#CodigoSeguridad").hide();
                            $("#dvVigenciaTarjeta").hide();
                            $("[name=MontoCob]").hide();
                            $("[name=Domiciliacion]").hide();
                            $("#MesesSinIntereses").hide();
                        }

                        $("#LgAmex").hide();
                        $("#LgVisaMc").hide();
                        if ($("#CmbMetodoPago3").val() == "2") {
                            $.ajax({
                                type: 'POST',
                                url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                                data: {
                                    servicio: 'ConsultaFP',
                                    cLlave: Cotizador.Parametros.DataGuide
                                }, success: function (data) {
                                    jQuery.globalEval(data);

                                },
                                timeout: 50000,
                                dataType: "text",
                                async: false
                            });
                        } else {
                            $("#CmbDomiciliar").val('0');
                            $("[name=DomiciliarTarjeta]").hide();
                        }
                        if ($(this).val() != 3 & $(this).val() != 0) {
                            $("[name=DatosTarjeta]").show();
                            if (ASHT.GetUrlParam("tokencor")[0] != "") {
                                $("[name=Domiciliacion]").show();
                            }
                            switch (parseInt($(this).val())) {
                                case 1:
                                    $("#DescNombreCuenta").html("* Nombre del tarjetahabiente");
                                    $("#DescNumeroCuenta").html("* Número de tarjeta");
                                    $("#DescDireccionCuenta").html("* Dirección tarjetahabiente");
                                    $("#dvVigenciaTarjeta").show();
                                    $("#CodigoSeguridad").hide();
                                    $("#nTarjeta").attr("maxlength", "16");
                                    $("[name=MontoCob]").hide();
                                    $("#MesesSinIntereses").hide();
                                    break;
                                case 2:
                                    $("#DescNombreCuenta").html("* Nombre del tarjetahabiente");
                                    $("#DescNumeroCuenta").html("* Número de tarjeta");
                                    $("#DescDireccionCuenta").html("* Dirección tarjetahabiente");
                                    $("#dvVigenciaTarjeta").show();
                                    $("#CodigoSeguridad").show();
                                    $("#nTarjeta").attr("maxlength", "16");
                                    $("[name=MontoCob]").show();
                                    $("[name=Domiciliacion]").hide();
                                    //$("#nPrimerPagoLb").html("Total a pagar: $" + Cotizador.Parametros.nPrimerPago);
                                    break;
                                case 4:
                                    $("#DescNombreCuenta").html("* Nombre del cuentahabiente");
                                    $("#DescNumeroCuenta").html("* Número de CLABE");
                                    $("#DescDireccionCuenta").html("* Dirección cuentahabiente");
                                    $("#dvVigenciaTarjeta").hide();
                                    $("#CodigoSeguridad").hide();
                                    $("#nTarjeta").attr("maxlength", "18");
                                    $("[name=MontoCob]").hide();
                                    break;
                            }

                            
                        } else {
                            $("[name=DatosTarjeta]").hide();
                            $("[name=MontoCob]").hide();
                            $("#MesesSinIntereses").hide();
                            if (ASHT.GetUrlParam("tokencor")[0] != "") {
                                $("[name=Domiciliacion]").hide();
                            }
                        }

                        if (Cotizador.Parametros.bCheckSitioCor) {
                            if ($("#CmbMetodoPago3").val() != "0") {
                                if ($("#CmbMetodoPago3").val() != "3") { //Referenciado
                                    $('#DvDatosBCor').show();
                                } else {
                                    $('#DvDatosBCor').hide();
                                }
                            }
                        }
                        break;
                    case "CmbTipoCarga":
                        Cotizador.LLenarCombos("[name=cVigencia]");
                        if ($(this).val() == "0") {
                            Cotizador.Parametros.cTipoCarga = ""
                            $("#TxtDescripcionCarga").val("");
                        }
                        if ($(this).val() == "E") {
                            Cotizador.Parametros.cTipoCarga = ""
                            if ($("#CmbTipoVehiculo").val() == 230) {
                                $("#TxtDescripcionCarga").addClass("Requerido");
                                $("#TxtDescripcionCarga").attr('disabled', true).removeClass('ui-state-disabled');
                                $("#TxtDescripcionCarga").val("")
                                alert("Camiones Hasta 7.5 deben incluir un Tipo de Carga obligatoriamente.");
                            } else {
                                $("#TxtDescripcionCarga").removeClass("Requerido");
                                $("#TxtDescripcionCarga").attr('disabled', true).addClass('ui-state-disabled').val("");
                            }
                        } else {
                            Cotizador.Parametros.cTipoCarga = $(this).val();
                            $("#TxtDescripcionCarga").addClass("Requerido");
                            $("#TxtDescripcionCarga").attr('disabled', false).removeClass('ui-state-disabled');
                        }

                        if ($(this).val() == "E" || $(this).val() == 0) {
                            if ($("#CmbTipoVehiculo").val() == null) {
                                if ($("#CmbTipoVehiculoFL").val() == 100) {
                                    $("#CmbUso").val("01").trigger("change").attr('disabled', true).addClass('ui-state-disabled');
                                } else {
                                    $("#CmbUso").val("37").trigger("change").attr('disabled', true).addClass('ui-state-disabled');
                                }
                            } else {
                                if ($("#CmbTipoVehiculo").val() == 100) {
                                    $("#CmbUso").val("01").trigger("change").attr('disabled', true).addClass('ui-state-disabled');
                                } else {
                                    $("#CmbUso").val("01").trigger("change").attr('disabled', true).addClass('ui-state-disabled');
                                }
                            }
                            //RC USA
                            if (Cotizador.Parametros.MostrarRCUSA) {
                                $("[cSISE=27]").show();
                            }
                            $("[cSISE=09]").show();

                            $.ajax({
                                type: 'POST',
                                url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                                data: {
                                    servicio: 'ActualizaCob',
                                    nIdNegocio: Cotizador.Parametros.nIdNegocio,
                                    DataGuide: Cotizador.Parametros.DataGuide,
                                    ccAgente: "1"
                                }, success: function (data) {
                                    jQuery.globalEval(data);
                                },
                                timeout: 50000,
                                dataType: "text",
                                async: false
                            });
                        } else {
                            if (Cotizador.Parametros.nTipoCotizador != 11) {
                                $("#CmbUso").val("29").trigger("change").attr('disabled', true).addClass('ui-state-disabled');
                            }
                            //RC USA
                            if (!Cotizador.Parametros.MostrarRCUSA) {
                                $("[cSISE=27]").hide();
                            }
                            $("[cSISE=09]").hide();
                            $("[type=checkbox][cSise=09]").iCheck("uncheck");
                            //$("[type=checkbox][cSise=27]").iCheck("uncheck");
                            $("[name=cVigencia] option[value=2]").remove();
                            $("[name=cVigencia] option[value=43]").remove();
                            $("[name=cVigencia] option[value=44]").remove();
                        }
                        break;
                    case "cPaisNacimiento":
                        switch ($(this).val()) {
                            case "0":
                                //Vaciar el campo Estado nacimiento                                
                                $("#idEdoNac").hide();
                                $("#cInputEdoNac").val("").trigger("focusout");
                                //$("#cEstadoNacimiento").val("0");
                                break;
                            case "01":
                                //Habilitar el combo Estado nacimiento
                                $("#idEdoNac").show();
                                $("#cEstadoNacimiento").val("0");
                                break;
                            default:
                                $("#idEdoNac").hide();
                                $("#cInputEdoNac").val("NA").trigger("focusout");
                                //$("#cEstadoNacimiento").val("0");
                                //Agregar NA al valor de Estado nacimiento
                                break;
                        }
                        //if ( == "0") {

                        //}
                        break;
                }
            });

            $("input[type=checkbox][nGuardar=1]").unbind('on').on('ifChecked', function (event) {
                $(this).val(1);
                Cotizador.GuardarCampo(this);

                switch ($(this).attr("id")) {
                    case "ChkSalvamento":
                        $("#TxtSumaCS").show().trigger("focusout");
                        $("#TxtSumaSS").hide();
                        break;
                    case "ChkValorFactura":
                        Cotizador.CambiaValorFactura();
                        if (Cotizador.Parametros.nValorVehiculo != 0 && Cotizador.Parametros.bExisteVF) {
                            $("#TblInputVF").show();
                            if (!Cotizador.Parametros.bPermiteCapturaSAVF) {
                                $("#TxtVFSA").attr('disabled', true).addClass('ui-state-disabled');
                            } else {
                                $("#TxtVFSA").attr('disabled', false).removeClass('ui-state-disabled');
                            }
                        }
                        var Suma = $('#TxtVFSA').val();
                        if (!Cotizador.Parametros.bExisteVF) {
                            $('#TxtVFSA').val('');
                        }
                        Cotizador.GuardarSumaAsegurada($("#TxtVFSA"));
                        $('#TxtVFSA').val(Suma);
                        $("#ChkValorConvenido").iCheck('uncheck');
                        break;
                    case "ChkValorConvenido":                
                        Cotizador.CambiaValorFactura();
                        if (Cotizador.Parametros.nValorVehiculo != 0) {
                            $("#TblInputVC").show();
                            if (!Cotizador.Parametros.bPermiteCapturaSAVC) {
                                $("#TxtVCSA").attr('disabled', true).addClass('ui-state-disabled');
                            } else {
                                $("#TxtVCSA").attr('disabled', false).removeClass('ui-state-disabled');
                            }
                        }

                        var Suma = $('#TxtVCSA').val();
                        if (!Cotizador.Parametros.bExisteVC) {
                            $('#TxtVCSA').val('');                            
                        }
                        Cotizador.GuardarSumaAsegurada($("#TxtVCSA"));
                        $('#TxtVCSA').val(Suma);
                        $("#ChkValorFactura").iCheck('uncheck');
                        break;
                    case "ChkMultiFormaPago":
                        Cotizador.Parametros.bMultiFormaPago = "1";
                        break;
                    case "ChkTextoABC":
                        Cotizador.Parametros.bTextoABC = "1";
                        break;
                    case "ChkClienteDF":
                        Cotizador.GuardarCampo(this);

                        if ($("#nTipoPersona").val() == "1") {
                            $("#cRazonSocial").val($("#cNombre").val() + " " + $("#cApaterno").val() + " " + $("#cAmaterno").val()).trigger("focusout");
                            $("#cRazonSocial").attr('disabled', true).addClass('ui-state-disabled');
                        } else {
                            $("#cRazonSocial").val($("#cEmpresa").val()).trigger("focusout");
                        }
                        $("#cRFCDF").val($("#cRFC").val()).trigger("focusout");
                        $("#cCorreoDF").val($("#cCorreo").val()).trigger("focusout");
                        
                        $("#cRFCDF").attr('disabled', true).addClass('ui-state-disabled');
                        $("#cCorreoDF").attr('disabled', true).addClass('ui-state-disabled');
                        break;						
                }
            });

            $("input[type=checkbox][nGuardar=1]").unbind('on').on('ifUnchecked', function (event) {
                $(this).val(0);
                Cotizador.GuardarCampo(this);

                switch ($(this).attr("id")) {
                    case "ChkSalvamento":
                        $("#TxtSumaSS").show().trigger("focusout");
                        $("#TxtSumaCS").hide();
                        break;
                    case "ChkValorFactura":
                        Cotizador.CambiaValorFactura();
                        $("#TblInputVF").hide();
                        //Cotizador.GuardarSumaAsegurada("");
                        break;
                    case "ChkValorConvenido":
                        Cotizador.CambiaValorFactura();
                        $("#TblInputVC").hide();
                        //Cotizador.GuardarSumaAsegurada("");
                        break;
                    case "ChkMultiFormaPago":
                        Cotizador.Parametros.bMultiFormaPago = "0";
                        break;
                    case "ChkTextoABC":
                        Cotizador.Parametros.bTextoABC = "0";
                        break;
                    case "ChkClienteDF":
                        $("#cRazonSocial").attr('disabled', false).removeClass('ui-state-disabled');
                        $("#cRFCDF").attr('disabled', false).removeClass('ui-state-disabled');
                        $("#cCorreoDF").attr('disabled', false).removeClass('ui-state-disabled');
                        break;						
                }
            });

            $("[name=nRecargo]").change(function () {
                if (this.checked) {
                    $("[name=nRecargo]").val(1);
                    $("#LblDescuento").html("Recargo");
                } else {
                    $("[name=nRecargo]").val(0);
                    $("#LblDescuento").html("Descuento");
                }

                Cotizador.GuardarCampo(this);
            });

            $("input[type=password][nGuardar=1]").unbind("focusout").focusout(function () {
                switch ($(this).attr("id")) {
                    case "cCodSeg":
                    case "nTarjeta":
                        Cotizador.GuardarCampo(this);
                        break;
                }
            });

            $("input[type=text][nGuardar=1]").unbind("focusout").focusout(function () {
                if ($(this).attr("name") != "cCorreo" && $(this).attr("name") != "cCorreoDF") {
                    $(this).val($(this).val().toUpperCase());
                }

                switch ($(this).attr("id")) {
                    case "TxtDescuento":
                        $("#TxtDescuento2").val($(this).val());
                        //if ($("#CmbDerecho").is(":visible")) {
                        //    var DescSelect = $(this).val();

                        //    if (DescSelect > 45.00) {
                        //        $("#CmbDerecho").val(0).trigger("change");
                        //        $("#CmbDerecho").attr('disabled', true).addClass('ui-state-disabled');;
                        //        $("#CmbDerecho2").attr('disabled', true).addClass('ui-state-disabled');;
                                
                        //    } else {
                        //        $("#CmbDerecho").attr('disabled', false).removeClass('ui-state-disabled');                                
                        //        $("#CmbDerecho2").attr('disabled', false).removeClass('ui-state-disabled');
                        //    }
                        //}						
                        break;
                    case "TxtDescuento2":
                        $("#TxtDescuento").val($(this).val());
                        $("[name=PrimaTotal]").html("Modificando...");
                        $("#BtnComprar").attr('disabled', true).addClass('ui-state-disabled');

                        //if ($("#CmbDerecho2").is(":visible")) {
                        //    var DescSelect = $(this).val();

                        //    if (DescSelect > 45.00) {
                        //        if ($("#CmbDerecho2").val() != "0") {
                        //            $("#CmbDerecho2").val(0).trigger("change");
                        //        }                                
                        //        $("#CmbDerecho").attr('disabled', true).addClass('ui-state-disabled');;
                        //        $("#CmbDerecho2").attr('disabled', true).addClass('ui-state-disabled');;

                        //    } else {
                        //        $("#CmbDerecho").attr('disabled', false).removeClass('ui-state-disabled');
                        //        $("#CmbDerecho2").attr('disabled', false).removeClass('ui-state-disabled');
                        //    }
                        //}

                        setTimeout(function () {
                            $("#BtnCotizar2").trigger("click");
                        }, 1000);
                        break;
                    case "cRFC":
                        $("[name=cRFCCOR]").val($(this).val().toUpperCase()).trigger("focusout");
                        if ($("#ChkClienteDF").is(":checked")) {
                            $("#cRFCDF").val($("#cRFC").val()).trigger("focusout");
                        }
                        //[Mejor interna asignacion automatica de fecha nac con RFC]
                        if ($("#nTipoPersona").val() == "1") { //Solo para personas fisicas                            

                            var rfc = $(this).val();
                            if (rfc !== "XAXX010101000" && rfc !== "") {
                                var anio = rfc.substring(4, 6);
                                var mes = rfc.substring(6, 8);
                                var dia = rfc.substring(8, 10);

                                const hoy = new Date();

                                if (Number(hoy.getFullYear().toString().substring(0, 2) + anio.toString()) > hoy.getFullYear()) {
                                    anio = (Number(hoy.getFullYear().toString().substring(0, 2)) - 1).toString() + anio.toString();
                                } else {
                                    anio = hoy.getFullYear().toString().substring(0, 2) + anio.toString();
                                }

                                $("#cFechaTH").val(dia + "/" + mes + "/" + anio).trigger("focusout");

                            } else {
                                $("#cFechaTH").val("").trigger("focusout");
                            }
                        } else {
                            var rfc = $(this).val();
                            if (rfc !== "XAX010101000" && rfc !== "") {
                                var anio = rfc.substring(3, 5);
                                var mes = rfc.substring(5, 7);
                                var dia = rfc.substring(7, 9);

                                const hoy = new Date();

                                if (Number(hoy.getFullYear().toString().substring(0, 2) + anio.toString()) > hoy.getFullYear()) {
                                    anio = (Number(hoy.getFullYear().toString().substring(0, 2)) - 1).toString() + anio.toString();
                                } else {
                                    anio = hoy.getFullYear().toString().substring(0, 2) + anio.toString();
                                }

                                $("#dFecConst").val(dia + "/" + mes + "/" + anio).trigger("focusout");

                            } else {
                                $("#dFecConst").val("").trigger("focusout");
                            }
                        }
                        break;
                    case "cCorreo":
                        if ($("#ChkClienteDF").is(":checked")) {
                            $("#cCorreoDF").val($("#cCorreo").val()).trigger("focusout");
                        }
                        break;
                    case "cNombre":
                    case "cApaterno":
                    case "cAmaterno":
                        if ($("#ChkClienteDF").is(":checked")) {
                            $("#cRazonSocial").val($("#cNombre").val() + " " + $("#cApaterno").val() + " " + $("#cAmaterno").val()).trigger("focusout");
                        }
                        break;
                    case "cEmpresa":
                        if ($("#ChkClienteDF").is(":checked")) {
                            $("#cRazonSocial").val($("#cEmpresa").val()).trigger("focusout");
                        }						
                        break;
                }

                if ($(this).attr("class") == "formatoprimas") {
                    var num = $(this).val().replace(/\,/g, '');
                    if (!isNaN(num)) {
                        num = num.toString().split('').reverse().join('').replace(/(?=\d*\,?)(\d{3})/g, '$1,');
                        num = num.split('').reverse().join('').replace(/^[\,]/, '');
                        $(this).val(num);
                    }
                }
                if ($(this).attr("name") == "cSerie") {
                    var _this = this;
                    $("#ILoad5").show(100, function () {
                        Cotizador.GuardarCampo(_this);
                    });
                } else {
                    Cotizador.GuardarCampo(this);
                }
            });            
        },

        GuardarCampo2: function () {
            $("select[nGuardar=2]").unbind("change").change(function () {
                Cotizador.GuardarCampo2(this);

                if ($(this).attr("cSISE") == "25" && $(this).attr("name") == "cSuma") {
                    if (parseInt($(this).find('option:selected').text().replace("$", "").replace(/,/g, "")) < parseInt($('[cSISE=26][nIdNegocioPlan=' + $(this).attr("nIdNegocioPlan") + '] option:selected').text().replace("$", "").replace(/,/g, ""))) {
                        $('[cSISE=26][nIdNegocioPlan=' + $(this).attr("nIdNegocioPlan") + '][name=cSuma]').val($(this).val()).trigger("change");
                    }
                }

                if ($(this).attr("cSISE") == "26" && $(this).attr("name") == "cSuma") {
                    if (parseInt($(this).find('option:selected').text().replace("$", "").replace(/,/g, "")) > parseInt($('[cSISE=25][nIdNegocioPlan=' + $(this).attr("nIdNegocioPlan") + '] option:selected').text().replace("$", "").replace(/,/g, ""))) {
                        $('[cSISE=25][nIdNegocioPlan=' + $(this).attr("nIdNegocioPlan") + '][name=cSuma]').val($(this).val()).trigger("change");
                    }
                }
            });

            $("input[type=checkbox][nGuardar=2]").unbind('on').on('ifChecked', function (event) {
                $(this).val(1);
                Cotizador.GuardarCampo2(this);

                if ($(this).attr("cSISE") == "08") {
                    $('[cSISE=38][nIdNegocioPlan=' + $(this).attr("nIdNegocioPlan") + ']').iCheck('uncheck').trigger("on");
                }

                if ($(this).attr("cSISE") == "38") {
                    $('[cSISE=08][nIdNegocioPlan=' + $(this).attr("nIdNegocioPlan") + ']').iCheck('uncheck').trigger("on");
                }
            });

            $("input[type=checkbox][nGuardar=2]").unbind('on').on('ifUnchecked', function (event) {
                $(this).val(0);
                Cotizador.GuardarCampo2(this);
            });

            $("input[type=radio][nGuardar=2]").unbind('on').on('ifChecked', function (event) {
                if ($(this).attr("name") == "nIdNegocioPlan") {
                    Cotizador.GuardarCampo(this);

                    if (parseInt($("#CmbTipoVehiculo").val()) > 200) {
                        if (typeof $("[cSISE=00B][nIdNegocioPlan=" + $(this).val() + "]").val() == "undefined") {
                            Cotizador.Parametros.nAdaptaciones = "0";
                            $("[name=Adaptaciones]").hide();
                        } else {
                            Cotizador.Parametros.nAdaptaciones = $("[cSISE=00B][nIdNegocioPlan=" + $(this).val() + "]").val();

                            if ($("[cSISE=00B][nIdNegocioPlan=" + $(this).val() + "]").val() != "0") {
                                $("[name=Adaptaciones]").show();
                            } else {
                                $("[name=Adaptaciones]").hide();
                            }
                        }

                    }
                } else {
                    Cotizador.GuardarCampo2(this);
                }
            });

            $("input[type=text][nGuardar=2]").unbind("focusout").focusout(function () {
                var num = $(this).val().replace(/\,/g, '');
                var bEntrar = true;
                if (!isNaN(num)) {
                    num = num.toString().split('').reverse().join('').replace(/(?=\d*\,?)(\d{3})/g, '$1,');
                    num = num.split('').reverse().join('').replace(/^[\,]/, '');
                    $(this).val(num);
                }

                if ($(this).attr("cSISE") == "00B") {
                    Cotizador.Parametros.nAdaptaciones = $(this).val();
                    if ($(this).val() == 0) {
                        $("[name=Adaptaciones]").hide();
                    } else {
                        $("[name=Adaptaciones]").show();
                    }

                    if (parseFloat($(this).val().replace(/\,/g, '')) > (Cotizador.Parametros.nValorVehiculo * Cotizador.Parametros.nPorcentajeAdaptaciones)) {
                        bEntrar = false;
                        $("#BtnComprar").attr('disabled', true).addClass('ui-state-disabled');

                        var num = Cotizador.Parametros.nValorVehiculo * Cotizador.Parametros.nPorcentajeAdaptaciones
                        num = num.toString().split('').reverse().join('').replace(/(?=\d*\,?)(\d{3})/g, '$1,');
                        num = num.split('').reverse().join('').replace(/^[\,]/, '');

                        ASHT.MensajeSimple("El valor de la adaptación no puede ser mayor a " + num + ".", "::Advertencia::", "", "auto", "auto");
                    }
                }

                if ($(this).attr("cSISE") == "15") {
                    Cotizador.Parametros.nEquipoEspecial = $(this).val();
                    if ($(this).val() == 0) {
                        $("[name=EquipoEspecial]").hide();
                    } else {
                        $("[name=EquipoEspecial]").show();
                    }

                    if (parseFloat($(this).val().replace(/\,/g, '')) > (Cotizador.Parametros.nValorVehiculo * Cotizador.Parametros.nPorcentajeEquipoEspecial)) {
                        bEntrar = false;
                        $("#BtnComprar").attr('disabled', true).addClass('ui-state-disabled');
                        var num = Cotizador.Parametros.nValorVehiculo * Cotizador.Parametros.nPorcentajeEquipoEspecial
                        num = num.toString().split('').reverse().join('').replace(/(?=\d*\,?)(\d{3})/g, '$1,');
                        num = num.split('').reverse().join('').replace(/^[\,]/, '');

                        ASHT.MensajeSimple("El valor del equipo especial no puede ser mayor a " + num + ".", "::Advertencia::", "", "auto", "auto");
                    }
                }

                if ($(this).attr("cSISE") == "30") {
                    if (parseFloat($(this).val().replace(/\,/g, '')) > (Cotizador.Parametros.nMaxVest)) {
                        bEntrar = false;
                        $("#BtnComprar").attr('disabled', true).addClass('ui-state-disabled');
                        ASHT.MensajeSimple("El valor de los accesorios no puede ser mayor a " + Cotizador.Parametros.nMaxVest + ".", "::Advertencia::", "", "auto", "auto");
                    }
                }

                if ($(this).attr("cSISE") == "31") {
                    if (parseFloat($(this).val().replace(/\,/g, '')) > (Cotizador.Parametros.nMaxCasco)) {
                        bEntrar = false;
                        $("#BtnComprar").attr('disabled', true).addClass('ui-state-disabled');
                        ASHT.MensajeSimple("El valor del casco/vestimenta no puede ser mayor a " + Cotizador.Parametros.nMaxCasco + ".", "::Advertencia::", "", "auto", "auto");
                    }
                }

                if (bEntrar) {
                    Cotizador.GuardarCampo2(this);
                }
            });
        },

        GuardarCampo3: function () {
            $("select[nGuardar=3]").unbind("change").change(function () {
                Cotizador.GuardarCampo3(this);
            });

            $("input[type=text][nGuardar=3]").unbind("focusout").focusout(function () {
                Cotizador.GuardarCampo3(this);
            });
        },

        TabPlan: function () {
            $("[name=TabPlan]").unbind("click").click(function () {
                $("[name=TabPlan]").removeClass("btnTabSelected").addClass("btnTab");
                $("[name=TabPlan][nTab=" + $(this).attr("nTab") + "]").addClass("btnTabSelected");
                $("[name=nIdNegocioPlan][value=" + $(this).attr("nTab") + "]").iCheck('check').trigger("on");

                if ($(this).attr("nOculto") == 1) {
                    $("[name=DvCoberturas]").hide("blind", 500);
                    $("[name=TabPlan]").attr("nOculto", 1);
                    $("[name=DvCoberturas][nTab=" + $(this).attr("nTab") + "]").show("blind", 500);
                    $(this).attr("nOculto", 0);
                } else {
                    $("[name=DvCoberturas][nTab=" + $(this).attr("nTab") + "]").hide("blind", 500);
                    $(this).attr("nOculto", 1);
                }
            });
        },

        lblPlan: function () {
            $("[name=lblPlan]").click(function () {
                $("[name=TabPlan]").removeClass("btnTabSelected").addClass("btnTab");
                $("[name=TabPlan][nTab=" + $(this).attr("nTab") + "]").addClass("btnTabSelected");
            });

            $("[name=nIdNegocioPlan]").unbind('on').on('ifChecked', function (event) {
                $("[name=TabPlan]").removeClass("btnTabSelected").addClass("btnTab");
                $("[name=TabPlan][nTab=" + $(this).val() + "]").addClass("btnTabSelected");
            });
        },

        ChkSeriePrecio: function () {
            $("#ChkSeriePrecio").change(function () {
                if (this.checked) {
                    $(this).val(1);
                    $("#TxtSerieFL").hide();
                    $("#TxtSumaFL").show();
                    $("#TxtVehiculoFL").prop('disabled', false);
                    Cotizador.GuardarCampo(this);
                } else {
                    $(this).val(0);
                    $("#TxtSerieFL").show();
                    $("#TxtSumaFL").hide();
                    $("#TxtVehiculoFL").prop('disabled', true);
                    Cotizador.GuardarCampo(this);
                }

                $("#TxtVehiculoFL").val("").trigger("focusout");
                if ($("#TxtSerieFL").is(":visible")) {
                    $("#TxtSerieFL").val("").trigger("focusout");
                }
                $("#TxtSumaFL").val("").trigger("focusout");
                $("#TxtSumaSS").val("").trigger("focusout");
                $("#TxtSumaCS").val("").trigger("focusout");
                $("#CmbModeloFL").val(0).trigger("change");
                $("#CmbTipoFronLeg").val(0).trigger("change");
            });
        },

        TxtSerieFL: function () {
            $("#TxtSerieFL").unbind("focusout").focusout(function () {
                //Cotizador.GuardarCampo(this);
                if ($(this).val != "") {
                    var _this = this;
                    $.ajax({
                        type: 'POST',
                        url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                        data: {
                            servicio: 'ConsultaSerie',
                            cSerie: $(_this).val(),
                            ccAgente: Cotizador.Parametros.ccAgente,
                            cTokenCor: ASHT.GetUrlParam("tokencor")[0],
                            DataGuide: Cotizador.Parametros.DataGuide
                        }, success: function (data) {
                            jQuery.globalEval(data);

                        },
                        timeout: 50000,
                        dataType: "text",
                        async: false
                    });
                }
            });
        },

        TxtSumaFL: function () {
            $("#TxtSumaFL").unbind("focusout").focusout(function () {
                //if ($(this).val() == "" || $(this).val() > 990000) {
                //    $(this).val(0);
                //}
				

                var num = $(this).val().replace(/\,/g, '');
                if (!isNaN(num)) {
                    num = num.toString().split('').reverse().join('').replace(/(?=\d*\,?)(\d{3})/g, '$1,');
                    num = num.split('').reverse().join('').replace(/^[\,]/, '');
                    $(this).val(num);
                }

                Cotizador.GuardarSumaAsegurada(this);
                Cotizador.GuardarCampo(this);
                $("#TxtSumaSS").val($(this).val());

                if (Cotizador.Parametros.legfront_chocolate == true) {


                    var num = parseFloat($(this).val().replace(/\,/g, '')) * 0.75;


                }
                else {
                    var num = parseFloat($(this).val().replace(/\,/g, '')) * 0.85;

                }
				
                num = num.toFixed(2)
                if (!isNaN(num)) {
                    num = num.toString().split('').reverse().join('').replace(/(?=\d*\,?)(\d{3})/g, '$1,');
                    num = num.split('').reverse().join('').replace(/^[\,]/, '');
                }

                $("#TxtSumaCS").val(num);
            });

            $("[name=SumaFL]").unbind("focusout").focusout(function () {
                Cotizador.GuardarSumaAsegurada(this);
            });
			
        },

        //		CmbTipoCarga: function () {
        //			$("#CmbTipoCarga").unbind("focusout").focusout(function () {
        //                if ($(this).val() == "E" && $("#CmbTipoVehiculo").val() == 230) {
        //                $(this).val("A");
        //			}
        //},

        BtnDialog: function () {
            $("#BtnDialogGuardar").unbind("click").click(function () {
                Cotizador.DialogGuardar();
            });
        },

        BtnGuardar: function (_this) {
            $("#BtnGuardar").unbind("click").click(function () {
                Cotizador.GuardarCotizacion(_this);
            });
        },

        BtnCancelar: function (_this) {
            $("#BtnCancelar").unbind("click").click(function () {
                $(_this).dialog("close");
            });
        },

        BtnEmitir: function () {
            $("#BtnEmitir").unbind("click").click(function () {
                var bEntrar = Cotizador.ValidaRequeridos("#FrmPago");

                if ($("[name=DatosTarjeta]").is(":visible")) {
                    if ($("#cDireccionTH").val() == "DOMICILIO CONOCIDO") {
                        $("#cDireccionTH").addClass("ui-state-error ui-state-error-text").effect("pulsate");
                        bEntrar = true;
                    } else {
                        $("#cDireccionTH").removeClass("ui-state-error ui-state-error-text");
                    }

                    if ($("#MesTarjeta").is(":visible")) {
                        var fecha = new Date();
                        var ano = fecha.getFullYear();

                        if (ano == parseInt("20" + $("#YearTarjeta").val())) {
                            var nMes = fecha.getMonth() + 1;

                            if (nMes >= parseInt($("#MesTarjeta").val())) {
                                $("#MesTarjeta").addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                $("#YearTarjeta").addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                alert("La vigencia de la tarjeta no es valida, favor de verificar.");
                                bEntrar = true;
                            } else {
                                $("#MesTarjeta").removeClass("ui-state-error ui-state-error-text");
                                $("#YearTarjeta").removeClass("ui-state-error ui-state-error-text");
                            }
                        }
                    }
                }
                if ($("[name=DomiciliarTarjeta]").is(":visible")) {
                    if ($("#CmbDomiciliar").val() == "0") {
                        $('#CmbDomiciliar').addClass('ui-state-error ui-state-error-text').effect('pulsate');
                        bEntrar = true;
                    } else {
                        $('#CmbDomiciliar').removeClass('ui-state-error ui-state-error-text');
                    }
                }

                if (!bEntrar) {
                    Cotizador.Emitir();
                }
            });
        },

        ChkAcuerdo: function () {
            $("#ChkAcuerdo").on('ifChecked', function (event) {
                if ($("#ChkAcuerdo2").is(":checked")) {
                    if ($("#ChkAcuerdo4").is(':visible')) {
                        if ($("#ChkAcuerdo4").is(":checked")) {
                            $("#BtnEmitir").attr('disabled', false).removeClass('ui-state-disabled');
                        }
                    } else {
                        $("#BtnEmitir").attr('disabled', false).removeClass('ui-state-disabled');
                    }                    
                }
            });

            $("#ChkAcuerdo").on('ifUnchecked', function (event) {
                $("#BtnEmitir").attr('disabled', true).addClass('ui-state-disabled');
            });

            $("#ChkAcuerdo2").on('ifChecked', function (event) {
                if ($("#ChkAcuerdo").is(":checked")) {
                    if ($("#ChkAcuerdo4").is(':visible')) {
                        if ($("#ChkAcuerdo4").is(":checked")) {
                            $("#BtnEmitir").attr('disabled', false).removeClass('ui-state-disabled');
                        }
                    } else {
                        $("#BtnEmitir").attr('disabled', false).removeClass('ui-state-disabled');
                    }
                }
            });

            $("#ChkAcuerdo2").on('ifUnchecked', function (event) {
                $("#BtnEmitir").attr('disabled', true).addClass('ui-state-disabled');
            });

            $("#ChkAcuerdo4").on('ifChecked', function (event) {
                if ($("#ChkAcuerdo2").is(":checked")) {
                    if ($("#ChkAcuerdo").is(":checked")) {
                        $("#BtnEmitir").attr('disabled', false).removeClass('ui-state-disabled');
                    }
                }
            });

            $("#ChkAcuerdo4").on('ifUnchecked', function (event) {
                $("#BtnEmitir").attr('disabled', true).addClass('ui-state-disabled');
            });

            $("#BtnMisDatos").unbind("click").click(function () {
                $("#NombreAcuerdo").val($("#cNombre").val() + " " + $("#cApaterno").val() + " " + $("#cAmaterno").val());
                $("#VehiculoAcuerdo").val(Cotizador.Parametros.cMensajeLegal);
                $("#ModeloAcuerdo").val($("#CmbModelo").val());
                $("#SerieAcuerdo").val($("#TxtSerieCot").val());
                $("#FrmAcuerdo").submit();
            });

            $("#BtnMisDatosBanco").unbind("click").click(function () {
                const hoy = new Date();
                var meses = new Array("ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC");
                $("#NombreAcuerdoCOR").val($("#cNombre").val() + " " + $("#cApaterno").val() + " " + $("#cAmaterno").val());
                $("#CalleAcuerdoCOR").val($("#cCalle").val());
                /*$("#MunicipioAcuerdoCOR").val(); //Extraer el valor de edo mun*/
                $("#TelefonoAcuerdoCOR").val($("#cTelefono").val());
                /*$("#PaqueteAcuerdoCOR").val(); //Extraer el plan seleccionado */
                $("#NumPagoAcuerdoCOR").val($("#CmbMetodoPago").find('option:selected').text()); //Extraer # pagos
                /*$("#BancoAcuerdoCOR").val(); //Identificar banco*/
                /*$("#TotalAcuerdoCOR").val(); // Extraer Total*/
                /*$("#NumRecPagoAcuerdoCOR").val(); // Extraer*/
                /* $("#ColoniaAcuerdoCOR").val(); //Extraer valor colonia*/
                $("#CPAcuerdoCOR").val($("#cCodigo").val());
                $("#RFCAcuerdoCOR").val($("#cRFC").val());
                $("#FecSolAcuerdoCOR").val(hoy.getDate() + " " + meses[hoy.getMonth()] + " " + hoy.getFullYear());
                // inicio de vigencia + 1 año
                var tjt = $("#nTarjeta").val();
                var largo = tjt.length - 4;
                $("#NumCtaAcuerdoCOR").val("************" + tjt.substring(largo));// banco cBanco
                /*$("#PrimerPagoAcuerdoCOR").val();//Extraer*/
                /*$("#SubPagoAcuerdoCOR").val();//Extraer*/
                $("#SerieAcuerdoCOR").val($("#TxtSerieCot").val());
                $.ajax({
                    type: 'POST',
                    url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                    data: {
                        servicio: "ExtraeInfoAcuerdoBanco",
                        llavecheck: Cotizador.Parametros.tokencotcheck,
                        cLlave: Cotizador.Parametros.DataGuide,
                        cMetodoPag: $("#CmbMetodoPago3").val(),
                        cBanco: $("#cBanco").find('option:selected').text(),
                        cTarjeta: $("#nTarjeta").val(),
                        cTokenCor: ASHT.GetUrlParam("tokencor")[0],
                        cFechaIV: $("#TxtInicioVigencia").val()
                    },
                    success: function (data) {
                        jQuery.globalEval(data);
                    },
                    timeout: 50000,
                    dataType: "text",
                    async: false
                });
               
            });
        },

        BtnAgregarAd: function () {
            $("[name=BtnAgregarAd]").unbind("click").click(function (event) {
                var HTML = ""
                Cotizador.Parametros.nNoAdaptaciones += 1;

                HTML += '           <div class="f3 stack animate" nLinea="' + Cotizador.Parametros.nNoAdaptaciones + '">';
                HTML += '               <div class="one">';
                HTML += '                   <div class="boxSelectCotizador">';
                HTML += '                       <label class="txtEtiqueta">* Descripción</label>';
                HTML += '                       <input class="inputTxtAjustable numerosletras Requerido" type="text" name="cAdaptacionD" nLinea="' + Cotizador.Parametros.nNoAdaptaciones + '" />';
                HTML += '                   </div>';
                HTML += '               </div>';
                HTML += '               <div class="two">';
                HTML += '                   <div class="boxSelectCotizador">';
                HTML += '                       <label class="txtEtiqueta">* Valor</label>';
                HTML += '                       <input class="inputTxtAjustableMedio numeros prima Requerido" type="text" name="cAdaptacionV" nLinea="' + Cotizador.Parametros.nNoAdaptaciones + '" />';
                HTML += '                   </div>';
                HTML += '               </div>';
                HTML += '               <div class="three">';
                HTML += '                   <div class="boxSelectCotizador">';
                HTML += '                       <label class="txtEtiqueta"></label><br />';
                HTML += '                       <input class="btnCotizador" type="button" value="Agregar" name="BtnAgregarAd" />';
                HTML += '                       <input class="btnCotizador" type="button" value="Eliminar" name="BtnEliminarAd" nLinea="' + Cotizador.Parametros.nNoAdaptaciones + '" style="display:none" />';
                HTML += '                   </div>';
                HTML += '               </div>';
                HTML += '               <div class="limpiar"></div>';
                HTML += '           </div>';

                $("[name=BtnAgregarAd]").remove();
                $("[name=BtnEliminarAd]").show();
                $("#DvAdaptaciones").append(HTML);

                Cotizador.AgregarFuncionesEvento.BtnAgregarAd();
                Cotizador.AgregarFuncionesEvento.BtnEliminarAd();
                Cotizador.AgregarFuncionesEvento.FormatoPrima2();
            });
        },

        BtnEliminarAd: function () {
            $("[name=BtnEliminarAd]").unbind("click").click(function () {
                $("[nLinea=" + $(this).attr("nLinea") + "]").remove();
            });
        },

        BtnAgregarEq: function () {
            $("[name=BtnAgregarEq]").unbind("click").click(function (event) {
                var HTML = ""
                Cotizador.Parametros.nNoEquipoEspecial += 1;

                HTML += '           <div class="f3 stack animate" nLinea="' + Cotizador.Parametros.nNoEquipoEspecial + '">';
                HTML += '               <div class="one">';
                HTML += '                   <div class="boxSelectCotizador">';
                HTML += '                       <label class="txtEtiqueta">* Descripción</label>';
                HTML += '                       <input class="inputTxtAjustable numerosletras Requerido" type="text" name="cEquipoD" nLinea="' + Cotizador.Parametros.nNoEquipoEspecial + '" />';
                HTML += '                   </div>';
                HTML += '               </div>';
                HTML += '               <div class="two">';
                HTML += '                   <div class="boxSelectCotizador">';
                HTML += '                       <label class="txtEtiqueta">* Valor</label>';
                HTML += '                       <input class="inputTxtAjustableMedio numeros prima Requerido" type="text" name="cEquipoV" nLinea="' + Cotizador.Parametros.nNoEquipoEspecial + '" />';
                HTML += '                   </div>';
                HTML += '               </div>';
                HTML += '               <div class="three">';
                HTML += '                   <div class="boxSelectCotizador">';
                HTML += '                       <label class="txtEtiqueta"></label><br />';
                HTML += '                       <input class="btnCotizador" type="button" value="Agregar" name="BtnAgregarEq" />';
                HTML += '                       <input class="btnCotizador" type="button" value="Eliminar" name="BtnEliminarEq" nLinea="' + Cotizador.Parametros.nNoEquipoEspecial + '" style="display:none" />';
                HTML += '                   </div>';
                HTML += '               </div>';
                HTML += '               <div class="limpiar"></div>';
                HTML += '           </div>';

                $("[name=BtnAgregarEq]").remove();
                $("[name=BtnEliminarEq]").show();
                $("#DvEquipoEspecial").append(HTML);

                Cotizador.AgregarFuncionesEvento.BtnAgregarEq();
                Cotizador.AgregarFuncionesEvento.BtnEliminarEq();
                Cotizador.AgregarFuncionesEvento.FormatoPrima2();
            });
        },

        BtnEliminarEq: function () {
            $("[name=BtnEliminarEq]").unbind("click").click(function () {
                $("[nLinea=" + $(this).attr("nLinea") + "]").remove();
            });
        },

        BtnEnviar: function () {
            $("[name=BtnEnviar]").unbind("click").click(function () {
                Cotizador.BtnEnviar($(this).attr("cImpresion"));
            });
        },

        FormatoPrima2: function () {
            $("[name=cAdaptacionV]").unbind("focusout").focusout(function () {
                var num = $(this).val().replace(/\,/g, '');
                if (!isNaN(num)) {
                    num = num.toString().split('').reverse().join('').replace(/(?=\d*\,?)(\d{3})/g, '$1,');
                    num = num.split('').reverse().join('').replace(/^[\,]/, '');
                    $(this).val(num);
                }
            });

            $("[name=cEquipoV]").unbind("focusout").focusout(function () {
                var num = $(this).val().replace(/\,/g, '');
                if (!isNaN(num)) {
                    num = num.toString().split('').reverse().join('').replace(/(?=\d*\,?)(\d{3})/g, '$1,');
                    num = num.split('').reverse().join('').replace(/^[\,]/, '');
                    $(this).val(num);
                }
            });
        },

        BtnDialogBuscar: function () {
            $("#BtnDialogBuscar").unbind("click").click(function () {
                Cotizador.BtnDialogBuscar();
            });
        },

        BtnBuscarCliente: function () {
            $("#BtnBuscarCliente").unbind("click").click(function () {
                Cotizador.BtnBuscarCliente();
            });
        },

        BtnElegir: function (_this) {
            $("#BtnElegir").unbind("click").click(function () {
                Cotizador.BtnElegir(_this);
            });
        }
    },

    EnviaCorreoActE: function () {
        $.ajax({
            type: 'POST',
            url: Parametros.Link + 'DataProviders/Cotizador.aspx',
            data: {
                servicio: 'EnviarActivacionEmision',
                cLlave: Cotizador.Parametros.DataGuide,
                Direccion: window.location.href.replace("#!", ""),
                ccAgente: 'PASA'
            }, success: function (data) {
                jQuery.globalEval(data);

            },
            timeout: 50000,
            dataType: "text",
            async: false
        });
    },

    VerificarAgente: function (cLlaveGrupoNegocio) {
        var bEntrar = false;
        $.ajax({
            type: 'POST',
            url: Parametros.Link + 'DataProviders/Cotizador.aspx',
            data: {
                servicio: 'Iniciar',
                cLlaveGrupoNegocio: cLlaveGrupoNegocio,
                cLlave: Cotizador.Parametros.cLlave,
                ccAgente: Cotizador.Parametros.ccAgente,
                cLog: ASHT.GetUrlParam("token")[0],
                cLogCor: ASHT.GetUrlParam("tokencor")[0],
                cActCor: ASHT.GetUrlParam("tokenAct")[0],
                tokenActE: ASHT.GetUrlParam("tokenActE")[0]
            }, success: function (data) {
                jQuery.globalEval(data);

                if (bIniciar) {
                    var Columna = "one";
                    var opciones = "";

                    if (arrValores.length == 2) {
                        bEntrar = true;
                    }

                    for (var i = 0; i <= arrCamposExtra.length - 1; i++) {
                        var HTML = '';

                        HTML += '       <div class="f2 stack animate">';
                        HTML += '           <div class="one">';
                        HTML += '               <div class="boxSelectCotizador">';
                        HTML += '                   <label class="txtEtiqueta">' + arrCamposExtra[i].cNombre + '</label>';

                        switch (arrCamposExtra[i].nTipo) {
                            case 0:
                                HTML += '<select class="selectAjustable';

                                if (arrCamposExtra[i].nRequerido == 1) {
                                    HTML += ' Requerido';
                                }
                                HTML += '" name="' + arrCamposExtra[i].cCampo + '" nGuardar="3">';

                                var Opciones = arrCamposExtra[i].cValores.split("|");

                                HTML += '<option value="0">--SELECCIONAR--</option>';
                                for (var x = 0; x <= Opciones.length - 1; x++) {
                                    HTML += '<option value="' + Opciones[x] + '">' + Opciones[x] + '</option>';
                                }
                                HTML += '</select>';
                                break;
                            case 1:
                                HTML += '<input class="inputTxtAjustable numerosletras';
                                if (arrCamposExtra[i].nRequerido == 1) {
                                    HTML += ' Requerido';
                                }
                                HTML += '" type="text" nGuardar="3" name="' + arrCamposExtra[i].cCampo + '" />';
                                break;

                            case 2:
                                HTML += '<input class="inputTxtAjustable numeros';
                                if (arrCamposExtra[i].nRequerido == 1) {
                                    HTML += ' Requerido';
                                }
                                HTML += '" type="text" nGuardar="3" name="' + arrCamposExtra[i].cCampo + '" />';
                                break;
                        }

                        HTML += '               </div>';
                        HTML += '           </div>';
                        HTML += '           <div class="limpiar"></div>';
                        HTML += '       </div>';

                        $("#" + arrCamposExtra[i].cFormulario).find("[name=DvCamposExtra]").append(HTML);
                    }

                    var HTML = "";
                    for (var i = 0; i <= arrValores.length - 1; i++) {
                        opciones += "<option value='" + arrValores[i].nValor + "' >" + arrValores[i].cValor + "</option>";

                        if (i > 0) {
                            if (Columna == "one") {
                                HTML += '       <div class="f4 stack animate">';
                            }

                            HTML += '<div class="' + Columna + '">';
                            if (i % 2 == 0) {
                                HTML += '   <div class="btnGris" name="BtnCotizadores" nTipoCot="' + arrValores[i].nValor + '" cAgrupador="' + arrValores[i].cAgrupador + '" style="background-image: url(';
                            } else {
                                HTML += '   <div class="btnRojo" name="BtnCotizadores" nTipoCot="' + arrValores[i].nValor + '" cAgrupador="' + arrValores[i].cAgrupador + '" style="background-image: url(';
                            }
/*                             if (arrValores[i].cAgrupador == "HOT SALE" || arrValores[i].cAgrupador == "HOT SALE Fronterizos y Legalizados") {
                                HTML += "'../Images/ico_hotsale22.gif')";
                            } else { */
                                HTML += "'../Images/" + arrValores[i].cImagen + "')";
/*                             } */
                            HTML += '">';
                            HTML += '       <p>' + arrValores[i].cAgrupador + '</p>';
                            HTML += '   </div>';
                            HTML += '</div>';

                            switch (Columna) {
                                case "one":
                                    Columna = "two";
                                    break;
                                case "two":
                                    Columna = "three";
                                    break;
                                case "three":
                                    Columna = "four";
                                    break;
                                case "four":
                                    HTML += '           <div class="limpiar"></div>';
                                    HTML += '       </div>';
                                    Columna = "one";
                                    break;
                            }

                            if (i == arrValores.length - 1 && Columna != "one") {
                                HTML += '           <div class="limpiar"></div>';
                                HTML += '       </div>';
                            }
                        }
                    }

                    $("#BtnCotizadores").html(HTML);

                    $("#CmbTipoCotizador").html(opciones).change(function () {
                        Cotizador.Parametros.nTipoCotizador = parseFloat($(this).val());
                        Cotizador.GuardarCampo(this);
                        switch (parseFloat($(this).val())) {
                            case 1: //Residentes
                                Cotizador.LLenarCombos("#CmbTipoVehiculo");
                                $("#FrmAutoGral").show();
                                $("#CmbTipoCarga").trigger("change");
                                break;
                            case 2: //Motos
                                if (Cotizador.Parametros.nIdNegocioGrupo == 1290 || Cotizador.Parametros.nIdNegocioGrupo == 1310) {
                                    $("#FrmMotoGenerica").show();
                                    //$("[name=DescripcionRC]").show();
                                    //$("#TxtModeloRC").attr('disabled', true).addClass('ui-state-disabled');
                                } else {
                                    $("#FrmMoto").show();
                                }
                                Cotizador.ConsultaNegocio(155);
                                Cotizador.LLenarCombos("#CmbServicio");
                                Cotizador.LLenarCombos("#CmbUso");
                                Cotizador.LLenarCombos("[name=nModelo]");
                                Cotizador.LLenarCombos("[name=cVigencia]");
                                //$("[name=ValorFactura]").remove();
                                //$("[name=ValorConvenido]").remove();

                                $.ajax({
                                    type: 'POST',
                                    url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                                    data: {
                                        servicio: 'ValidaPlanesMotos',
                                        ccAgente: Cotizador.Parametros.ccAgente,
                                        nIdNegocio: Cotizador.Parametros.nIdNegocio
                                    }, success: function (data) {
                                        jQuery.globalEval(data);

                                    },
                                    timeout: 50000,
                                    dataType: "text",
                                    async: false
                                });
                                break;
                            case 3: //Taxis
                                Cotizador.LLenarCombos("#CmbTipoVehiculo");
                                //$("[name=ValorFactura]").remove();
                                //$("[name=ValorConvenido]").remove();
                                $("#FrmAutoGral").show();
                                break;
                            case 4: //Fronterizos
                                Cotizador.LLenarCombos("#CmbTipoVehiculoFL");
                                Cotizador.LLenarCombos("#CmbModeloFL");
                                $("[name=ValorFactura]").hide();
                                $("[name=ValorConvenido]").hide();
                                $("[name=DescripcionRC]").remove();
                                $("#FrmFronLeg").show();
                                $("#CmbTipoCarga").trigger("change");
                                break;
                            case 5: //Seguro por Tiempo
                                Cotizador.LLenarCombos("#CmbTipoVehiculo");
                                $("#HoraVigencia").show();
                                $("#FrmAutoGral").show();
                                $("#CmbTipoCarga").trigger("change");
                                break;
                            case 6: //RC Obligatorio
                                Cotizador.LLenarCombos("#CmbTipoVehiculo");
                                $("#FrmAutoGral").show();
                                $("#CmbTipoCarga").trigger("change");                                                           
                                break;
                            case 7: //RC Carreteras
                                Cotizador.LLenarCombos("#CmbTipoVehiculo");
                                $("#FrmAutoGral").show();
                                $("#CmbTipoCarga").trigger("change");
                                break;
                            case 8: //Tarifa Nivelada
                                $("#FrmNivelada").show();
                                Cotizador.ConsultaNegocio(100);
                                Cotizador.LLenarCombos("#CmbServicio");
                                Cotizador.LLenarCombos("#CmbUso");
                                Cotizador.LLenarCombos("[name=nModelo]");
                                Cotizador.LLenarCombos("[name=cVigencia]");
                                $("[name=ValorFactura]").hide();
                                $("[name=ValorConvenido]").hide();
                                $("#BtnBuscarSerie").unbind("click").click(function () {
                                    Cotizador.ConsultaSerie($("#TxtSerieNivelada").val());
                                });
                                break;
                            case 9: //Pasajeros
                                Cotizador.LLenarCombos("#CmbTipoVehiculo");
                                Cotizador.LLenarCombos("#CmbUso");
                                $("[name=ValorConvenido]").remove();
                                $("#FrmAutoGral").show();
                                break;
                            case 10: //Tesla
                                Cotizador.LLenarCombos("#CmbTipoVehiculo");
                                Cotizador.LLenarCombos("#CmbUso");
                                $("[name=ValorConvenido]").remove();
                                $("#FrmAutoGral").show();
                                break;
                            case 11: //Tractos
                                Cotizador.LLenarCombos("#CmbTipoVehiculo");
                                $("#FrmAutoGral").show();
                                $("#CmbTipoCarga option[value=E]").hide();
                                //$("#DvDescripcion").show();
                                break;
                        }
                    });

                    $("[name=nRecargo]").adaptiveSwitch();
                    $("#ChkSeriePrecio").adaptiveSwitch();

                    $("#ChkSalvamento").iCheck({
                        checkboxClass: 'icheckbox_square-red'
                    });

                    $("#ChkValorFactura").iCheck({
                        checkboxClass: 'icheckbox_square-red'
                    });

                    $("#ChkValorConvenido").iCheck({
                        checkboxClass: 'icheckbox_square-red'
                    });

                    $("#ChkMultiFormaPago").iCheck({
                        checkboxClass: 'icheckbox_square-red'
                    });

                    $("#ChkTextoABC").iCheck({
                        checkboxClass: 'icheckbox_square-red'
                    });

                    $("#ChkClienteDF").iCheck({
                        checkboxClass: 'icheckbox_square-red'
                    });
					
                    $("#ChkAcuerdo").iCheck({
                        checkboxClass: 'icheckbox_square-red'
                    });

                    $("#ChkAcuerdo2").iCheck({
                        checkboxClass: 'icheckbox_square-red'
                    });

                    $("#ChkAcuerdo3").iCheck({
                        checkboxClass: 'icheckbox_square-red'
                    });

                    $("#ChkAcuerdo4").iCheck({
                        checkboxClass: 'icheckbox_square-red'
                    });

                    Cotizador.AgregarFuncionesEvento.TxtBuscaVehiculo();
                    Cotizador.AgregarFuncionesEvento.TxtBuscaMoto();
                    Cotizador.AgregarFuncionesEvento.TxtBuscaCP();
                    Cotizador.AgregarFuncionesEvento.BtnCambiar();
                    Cotizador.AgregarFuncionesEvento.GuardarCampo();
                    Cotizador.AgregarFuncionesEvento.GuardarCampo3();
                    Cotizador.AgregarFuncionesEvento.TxtValorFactura();
                    Cotizador.AgregarFuncionesEvento.TxtValorFactura2();
                    Cotizador.AgregarFuncionesEvento.TxtValorFactura3(); //TESLA
                    Cotizador.AgregarFuncionesEvento.TxtValorFactura4(); //TRACTOS nTipoCotizador 11
                    Cotizador.AgregarFuncionesEvento.TxtValorFactura5(); //TRACTOS nTipoCotizador 11
                    Cotizador.AgregarFuncionesEvento.SumaAseguradaVeh(); //[Tipos Indemnizacion]
                    Cotizador.AgregarFuncionesEvento.nTipoPersona();
					Cotizador.AgregarFuncionesEvento.cCargaDF();
                    Cotizador.AgregarFuncionesEvento.TxtSerieFL();
                    Cotizador.AgregarFuncionesEvento.TxtSumaFL();
                    Cotizador.AgregarFuncionesEvento.ChkSeriePrecio();
                    Cotizador.AgregarFuncionesEvento.BtnCotizar2();
                    Cotizador.AgregarFuncionesEvento.BtnDialog();
                    Cotizador.AgregarFuncionesEvento.SoloNumeros();
                    Cotizador.AgregarFuncionesEvento.Numeros();
                    Cotizador.AgregarFuncionesEvento.NumerosLetras();
					Cotizador.AgregarFuncionesEvento.NumerosLetrasSin();
                    Cotizador.AgregarFuncionesEvento.NumerosLetras2();
                    Cotizador.AgregarFuncionesEvento.NumerosPipe();
                    Cotizador.AgregarFuncionesEvento.BtnEmitir();
                    Cotizador.AgregarFuncionesEvento.BtnCotizadores();
                    Cotizador.AgregarFuncionesEvento.ChkAcuerdo();
                    Cotizador.AgregarFuncionesEvento.BtnAgregarAd();
                    Cotizador.AgregarFuncionesEvento.BtnEliminarAd();
                    Cotizador.AgregarFuncionesEvento.BtnAgregarEq();
                    Cotizador.AgregarFuncionesEvento.BtnEliminarEq();
                    Cotizador.AgregarFuncionesEvento.BtnDialogBuscar();

                    Cotizador.LLenarCombos("#cNacionalidad");
                    Cotizador.LLenarCombos("#cNacionalidad2");
                    Cotizador.LLenarCombos("#cNacionalidadRepres");
                    Cotizador.LLenarCombos("#nTipoIdentificacion");
                    Cotizador.LLenarCombos("#cOcupacion");
                    Cotizador.LLenarCombos("#cConductorOcupacion");
                    Cotizador.LLenarCombos("#nGiro");
                    Cotizador.LLenarCombos("#CmbColor");
                    Cotizador.LLenarCombos("#CmbHora");
                    Cotizador.LLenarCombos("#CmbMinuto");
                    Cotizador.LLenarCombos("#MesTarjeta");
                    Cotizador.LLenarCombos("#YearTarjeta");
                    Cotizador.LLenarCombos("#cBanco");

                    if (bEntrar) {
                        $("[name=BtnCotizadores][nTipoCot=" + arrValores[1].nValor + "]").trigger("click");
                    }

                    var FechaAct = new Date();
                    var AnoPoisible = "1920:" + (FechaAct.getFullYear() - 18);
                    $("[nTipo=2]").datepicker({
                        dateFormat: 'dd/mm/yy',
                        closeText: 'Cerrar',
                        prevText: '<Ant',
                        nextText: 'Sig>',
                        currentText: 'Hoy',
                        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
                        dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
                        dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
                        changeMonth: true,
                        changeYear: true,
                        numberOfMonths: 1,
                        yearRange: AnoPoisible,
                        defaultDate: "-18y -1d",
                        onSelect: function (date) {
                            console.log(date);
                            Cotizador.GuardarCampo(this);
                        }
                    }).click(function () {
                        $(this).blur();
                    }).readOnly;

                    if (Cotizador.Parametros.cLlave != "") {
                        $.ajax({
                            type: 'POST',
                            url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                            data: {
                                servicio: 'RecuperaCotizacion',
                                cLlave: Cotizador.Parametros.DataGuide,
                                ccAgente: Cotizador.Parametros.ccAgente,
                                cLogCor: ASHT.GetUrlParam("tokencor")[0]
                            },
                            success: function (data) {
                                jQuery.globalEval(data);

                            },
                            timeout: 50000,
                            dataType: "text",
                            async: true
                        });
                    } else {
                        if ($("[name=BtnCotizadores]").length == 1) {
                            $("[name=BtnCotizadores]").trigger("click");
                        }
                    }
                }
            },
            timeout: 50000,
            dataType: "text",
            async: false
        });
    },
    ConsultaNegocio: function (nCategoria) {
        $.ajax({
            type: 'POST',
            url: Parametros.Link + 'DataProviders/Cotizador.aspx',
            data: {
                servicio: 'ConsultaNegocio',
                nTipoNegocio: Cotizador.Parametros.nTipoCotizador,
                nIdNegocioGrupo: Cotizador.Parametros.nIdNegocioGrupo,
                nCategoria: nCategoria,
                cLlave: Cotizador.Parametros.DataGuide,
                ccAgente: Cotizador.Parametros.ccAgente,
                cAgrupador: Cotizador.Parametros.cAgrupador,
                cLog: ASHT.GetUrlParam("token")[0],
                cLogCor: ASHT.GetUrlParam("tokencor")[0],
                cTokenCor: ASHT.GetUrlParam("tokencor")[0]
            }, success: function (data) {
                jQuery.globalEval(data);

                $("[name=cInicioVigencia]").datepicker({
                    dateFormat: 'dd/mm/yy',
                    closeText: 'Cerrar',
                    prevText: '<Ant',
                    nextText: 'Sig>',
                    currentText: 'Hoy',
                    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
                    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
                    dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
                    changeMonth: true,
                    changeYear: false,
                    numberOfMonths: 1,
                    minDate: nDiasRetro,
                    maxDate: nDiasAnticipada,
                    onSelect: function (date) {
                        Cotizador.GuardarCampo(this);

                        if ($(this).attr("id") == "TxtInVigencia") {
                            $("#TxtInicioVigencia").val($(this).val()).attr('disabled', true).addClass('ui-state-disabled');
                        }

                        if (Cotizador.Parametros.nTipoCotizador == 5) {
                            var FechaAct = new Date();
                            var cFechaAct = ("0" + FechaAct.getDate()).slice(-2) + "/" + ("0" + (FechaAct.getMonth() + 1)).slice(-2) + "/" + FechaAct.getFullYear();

                            if ($(this).val() == cFechaAct) {
                                $("#CmbHora").val("00").trigger("change");
                                $("#CmbMinuto").val("00").trigger("change");
                                $("#HoraVigencia").hide();
                            } else {
                                $("#HoraVigencia").show();
                            }
                        }
                    },
                }).click(function () {
                    $(this).blur();
                });

                $('#TxtInicioVigencia').datepicker("setDate", new Date()).trigger("focusout");

                $('#TxtInicioVigencia').unbind("keypress").keypress(function (event) {
                    var tecla = (document.all) ? event.keyCode : event.which;
                    var letra = /[. /-]/.test(String.fromCharCode(tecla));
                    return letra;
                });

                $('#TxtInicioVigencia').unbind("focusout");
            },
            timeout: 50000,
            dataType: "text",
            async: false
        });
    },

    GuardarCampoGeo: function (cValor, cCampo) {
        $.ajax({
            type: 'POST',
            url: Parametros.Link + 'DataProviders/Cotizador.aspx',
            data: {
                servicio: 'GuardarCampo',
                cValor: cValor,
                cCampo: cCampo,
                DataGuide: Cotizador.Parametros.DataGuide,
                ccAgente: Cotizador.Parametros.ccAgente,
                cTokenCor: ASHT.GetUrlParam("tokencor")[0]
            }, success: function (data) {
                jQuery.globalEval(data);
            },
            timeout: 50000,
            dataType: "text",
            async: false
        });
    },

    GuardarCampo: function (_this) {
        $.ajax({
            type: 'POST',
            url: Parametros.Link + 'DataProviders/Cotizador.aspx',
            data: {
                servicio: 'GuardarCampo',
                cValor: $(_this).val(),
                cCampo: $(_this).attr("name"),
                DataGuide: Cotizador.Parametros.DataGuide,
                ccAgente: Cotizador.Parametros.ccAgente,
                cTokenCor: ASHT.GetUrlParam("tokencor")[0]
            }, success: function (data) {
                jQuery.globalEval(data);
            },
            timeout: 50000,
            dataType: "text",
            async: false
        });
    },

    GuardarCampo3: function (_this) {
        $.ajax({
            type: 'POST',
            url: Parametros.Link + 'DataProviders/Cotizador.aspx',
            data: {
                servicio: 'GuardarCampo3',
                cValor: $(_this).val(),
                cCampo: $(_this).attr("name"),
                DataGuide: Cotizador.Parametros.DataGuide,
                ccAgente: Cotizador.Parametros.ccAgente,
                cTokenCor: ASHT.GetUrlParam("tokencor")[0]
            }, success: function (data) {
                jQuery.globalEval(data);
            },
            timeout: 50000,
            dataType: "text",
            async: false
        });
    },

    GuardarCampo2: function (_this) {
        $.ajax({
            type: 'POST',
            url: Parametros.Link + 'DataProviders/Cotizador.aspx',
            data: {
                servicio: 'GuardarCampo2',
                cValor: $(_this).val(),
                cCampo: $(_this).attr("name"),
                DataGuide: Cotizador.Parametros.DataGuide,
                cSISEPlan: $(_this).attr("cSISEPlan"),
                nIdNegocioPlan: $(_this).attr("nIdNegocioPlan"),
                cSISE: $(_this).attr("cSISE"),
                ccAgente: Cotizador.Parametros.ccAgente,
                cTokenCor: ASHT.GetUrlParam("tokencor")[0]
            }, success: function (data) {
                jQuery.globalEval(data);
                if (Cotizador.Parametros.bPuedeCotizar) {
                    if (Cotizador.Parametros.bPermiteCotizar) {
                        Cotizador.Cotizar($(_this).attr("nIdNegocioPlan"));
                    }
                }                
            },
            timeout: 50000,
            dataType: "text",
            async: false
        });
    },

    GuardarSumaAsegurada: function (_this) {
        $.ajax({
            type: 'POST',
            url: Parametros.Link + 'DataProviders/Cotizador.aspx',
            data: {
                servicio: 'GuardarSumaAsegurada',
                cValor: $(_this).val(),
                DataGuide: Cotizador.Parametros.DataGuide,
                ccAgente: Cotizador.Parametros.ccAgente,
                cTokenCor: ASHT.GetUrlParam("tokencor")[0]
            }, success: function (data) {
                jQuery.globalEval(data);

            },
            timeout: 50000,
            dataType: "text",
            async: false
        });
    },

    CambiaValorFactura: function () {
        $.ajax({
            type: 'POST',
            url: Parametros.Link + 'DataProviders/Cotizador.aspx',
            data: {
                servicio: 'CambiaValorFactura',
                DataGuide: Cotizador.Parametros.DataGuide,
                ccAgente: Cotizador.Parametros.ccAgente,
                cTokenCor: ASHT.GetUrlParam("tokencor")[0]
            }, success: function (data) {
                jQuery.globalEval(data);

            },
            timeout: 50000,
            dataType: "text",
            async: false
        });
    },

    ActivarValorConvenidoMotos: function () {
        $.ajax({
            type: 'POST',
            url: Parametros.Link + 'DataProviders/Cotizador.aspx',
            data: {
                servicio: 'ActivarValorConvenidoMotos',
                DataGuide: Cotizador.Parametros.DataGuide,
                ccAgente: Cotizador.Parametros.ccAgente,
                cTokenCor: ASHT.GetUrlParam("tokencor")[0],
                cPasa: Cotizador.Parametros.cValorConvenidoMotos
            }, success: function (data) {
                jQuery.globalEval(data);

            },
            timeout: 50000,
            dataType: "text",
            async: false
        });
    },

    ConstruyeCoberturas: function () {
        Cotizador.Parametros.cPSISEPlan = "";
        $("#BtnCotizar").attr('disabled', true).addClass('ui-state-disabled').val("Espere un momento por favor...");
        $("#TxtBuscaCP").attr('disabled', true).addClass('ui-state-disabled').attr("placeholder", "Espere un momento por favor...");
        $("#CmbEstado").attr('disabled', true).addClass('ui-state-disabled');
        $("#ChkValorConvenido").iCheck('disable');
        $("#ChkValorFactura").iCheck('disable');

        $.ajax({
            type: 'POST',
            url: Parametros.Link + 'DataProviders/Cotizador.aspx',
            data: {
                servicio: 'ConsultaPlanes',
                nIdNegocio: Cotizador.Parametros.nIdNegocio,
                ccAgente: Cotizador.Parametros.ccAgente,
                cTokenCor: ASHT.GetUrlParam("tokencor")[0],
                bRenovacion: Cotizador.Parametros.bRenovacion,
                cTipoValorRena: Cotizador.Parametros.cTipoValorRena,
                nPlanRena: Cotizador.Parametros.nPlanRena,
                //RC USA
                DataGuide: Cotizador.Parametros.DataGuide,
                nTipoCotizador: Cotizador.Parametros.nTipoCotizador
            }, success: function (data) {
                jQuery.globalEval(data);
                if (arrCoberturas.length > 0) {
                    $("#ChkValorConvenido").iCheck('uncheck').trigger("on");
                    $("#ChkValorFactura").iCheck('uncheck').trigger("on");
                    var HTMLCode = "";
                    Cotizador.Parametros.nIdNegocioPlanes = "";
                    var nIdNegocioPlan = 0;
                    for (var i = 0; i < arrCoberturas.length; i++) {
                        if (Cotizador.Parametros.cPSISEPlan == "") {
                            Cotizador.Parametros.cPSISEPlan = arrCoberturas[i].nIdNegocioPlan;
                        }
                        if (nIdNegocioPlan != arrCoberturas[i].nIdNegocioPlan) {
                            nIdNegocioPlan = arrCoberturas[i].nIdNegocioPlan;
                            Cotizador.Parametros.nIdNegocioPlanes += nIdNegocioPlan + ",";
                            HTMLCode += '   <div class="f2 animate stack btnTab" style="cursor:pointer" name="TabPlan" nTab="' + nIdNegocioPlan + '" cSISEPlan="' + arrCoberturas[i].cSISEPlan + '" nOculto="1">';
                            HTMLCode += ' 		<div class="one alignDer">';
                            HTMLCode += '           <table width="100%" style="text-align:left;">';
                            HTMLCode += '              <tr>';
                            HTMLCode += '                   <td width="10%"><input type="radio" id="Rd' + nIdNegocioPlan + '" value="' + nIdNegocioPlan + '" name="nIdNegocioPlan" nGuardar="2" cSISEPlan="' + arrCoberturas[i].cSISEPlan + '"/></td>';
                            HTMLCode += '                   <td><label for="Rd' + nIdNegocioPlan + '" style="cursor:pointer" name="lblPlan" nTab="' + nIdNegocioPlan + '">' + arrCoberturas[i].cNombrePlan + '</label> </td>';
                            HTMLCode += '              </tr>';
                            HTMLCode += '           </table>';
                            HTMLCode += '       </div>';
                            HTMLCode += ' 	    <div class="two alignDer">';
                            HTMLCode += '           <div name="PrimaTotal" nPaquete="' + nIdNegocioPlan + '" class="resPrecio">Cotizando</div>';
                            HTMLCode += '       </div>';
                            HTMLCode += ' 	</div>';
                            HTMLCode += '   <div class="f5b stack animate TabProp" nTab="' + nIdNegocioPlan + '" name="DvCoberturas" style="display:none">';
                            HTMLCode += '       <div class="limpiar"></div>';
                            HTMLCode += '       <div class="one btnGral" ndetalle="' + nIdNegocioPlan + '"></div>';
                            HTMLCode += ' 		<div class="two btnGral" name="BtnEnviar" nIdPlan="' + nIdNegocioPlan + '" cImpresion="">ENVIAR POR EMAIL</div>';
                            HTMLCode += ' 		<div class="three">';
                            HTMLCode += '           <a href="" target="_blank" class="btnGral" nIdPlan="' + nIdNegocioPlan + '" name="ImgImpresion" cLlaveCot="">IMPRIMIR</a>';
                            HTMLCode += '       </div>';
                            HTMLCode += ' 		<div class="four resPrimerPago btnGral" name="Pagos" nPaquete="' + nIdNegocioPlan + '">';
                            HTMLCode += '           SUBSECUENTES (<span name="Recibos" nPaquete="' + nIdNegocioPlan + '"></span>)<br />';
                            HTMLCode += '           <strong><span name="Subsecuente" nPaquete="' + nIdNegocioPlan + '"></span></strong>';
                            HTMLCode += '       </div>';
                            HTMLCode += ' 		<div class="five resPrimerPago btnGral" name="Pagos" nPaquete="' + nIdNegocioPlan + '">';
                            HTMLCode += '           PRIMER PAGO<br />';
                            HTMLCode += '           <strong><span name="PrimerPago" nPaquete="' + nIdNegocioPlan + '"></span></strong>';
                            HTMLCode += '       </div>';
                            HTMLCode += '       <div class="limpiar"></div>';
                            HTMLCode += ' 	</div>';
                            HTMLCode += '   <div class="f1 stack animate TabCob" nTab="' + nIdNegocioPlan + '" name="DvCoberturas" style="display:none">';
                            HTMLCode += ' 		<div name="Coberturas" nIdPlan="' + nIdNegocioPlan + '"></div>';
                            HTMLCode += ' 	</div>';
                        }
                    }
                    $("#DvCotizacion").html(HTMLCode);
                }
            },
            timeout: 50000,
            dataType: "text",
            async: false
        });

        var ArrPlanes2 = new Array();
        var Indice = 0;
        var ArrPlanes = Cotizador.Parametros.nIdNegocioPlanes.split(",");
        for (var z = 0; z < (ArrPlanes.length - 1); z++) {
            $.ajax({
                type: 'POST',
                url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                data: {
                    servicio: 'ConsultaCoberturas',
                    cLlave: Cotizador.Parametros.DataGuide,
                    nIdNegocioPlan: ArrPlanes[z],
                    ccAgente: Cotizador.Parametros.ccAgente,
                    nIniciar: Cotizador.Parametros.nIniciar,
                    cTokenCor: ASHT.GetUrlParam("tokencor")[0],
                    cTipoCarga: Cotizador.Parametros.cTipoCarga
                }, success: function (data) {
                    jQuery.globalEval(data);

                    if (arrCoberturas.length > 0) {
                        var Fila = 0;
                        for (var i = 0; i < arrCoberturas.length; i++) {
                            var cDisplay = "";
                            if (arrCoberturas[i].cSISE == "36" || arrCoberturas[i].cSISE == "39") {
                                cDisplay = "display:none;"
                            }
                            var Cobertura = "";
                            Cobertura += "<div class='f3 stack animate' cSISE='" + arrCoberturas[i].cSISE + "' style='" + cDisplay + "'>";
                            //Cobertura += "<div style='padding-top:10px;'>"
                            var Columna = 2;
                            switch (parseInt(arrCoberturas[i].nTipo)) {
                                case 0:
                                    Cobertura += "<div class='one' style='text-align:left;'>" + arrCoberturas[i].cNombre + ":</div>";
                                    Cobertura += "<div class='two'>";
                                    Cobertura += "  <input class='inputTxtAjustableMedio numeros formatoprimas' type='text' nGuardar='2'  name='cSuma' cSISEPlan='" + arrCoberturas[i].cSISEPlan + "' cSISE='" + arrCoberturas[i].cSISE + "' nIdNegocioPlan = '" + arrCoberturas[i].nIdNegocioPlan + "'>";
                                    Cobertura += "</div>";
                                    break;
                                case 1:
                                    if (arrCoberturas[i].cSISE == "40") {

                                    }
                                    Cobertura += "<div class='limpiar'></div>";
                                    Cobertura += "<div class='one' style='text-align:left;'>" + arrCoberturas[i].cNombre + ":</div>";
                                    if (arrCoberturas[i].cVSuma != "") {
                                        Cobertura += "<div class='two'>";
                                        Cobertura += "  <select nGuardar='2' class='selectAjustableMedio' name='cSuma' cSISEPlan='" + arrCoberturas[i].cSISEPlan + "' cSISE='" + arrCoberturas[i].cSISE + "' nIdNegocioPlan = '" + arrCoberturas[i].nIdNegocioPlan + "'>";
                                        var cValores = arrCoberturas[i].cVSuma.split("|");
                                        var cValoresC = arrCoberturas[i].cVSumaC.split("|");

                                        for (x = 0; x < cValores.length; x++) {
                                            var num = cValores[x].replace(/\,/g, '');
                                            if (!isNaN(num)) {
                                                if (parseInt(num) > 1000) {
                                                    num = num.toString().split('').reverse().join('').replace(/(?=\d*\,?)(\d{3})/g, '$1,');
                                                    num = "$" + num.split('').reverse().join('').replace(/^[\,]/, '');
                                                }
                                            } else {
                                                num = cValores[x];
                                            }
                                            Cobertura += "  <option value='" + cValoresC[x] + "'>" + num + "</option>";
                                        }
                                        Cobertura += "  </select>";
                                        Cobertura += "</div>";
                                        Columna += 1;
                                    }

                                    if (arrCoberturas[i].cVDeducible != "") {
                                        if (Columna == 2) {
                                            Cobertura += "<div class='two'>";
                                        } else {
                                            Cobertura += "<div class='three'>";
                                        }
                                        Cobertura += "  <select nGuardar='2' class='selectAjustableMedio' name='cDeducible' cSISEPlan='" + arrCoberturas[i].cSISEPlan + "' cSISE='" + arrCoberturas[i].cSISE + "'nIdNegocioPlan = '" + arrCoberturas[i].nIdNegocioPlan + "'>";
                                        var cValores = arrCoberturas[i].cVDeducible.split("|");
                                        var cValoresC = arrCoberturas[i].cVDeducibleC.split("|");
                                        for (x = 0; x < cValores.length; x++) {
                                            if (cValores[x] == "EXCLUIDA") {
                                                Cobertura += "      <option value='" + cValoresC[x] + "'>" + cValores[x] + "</option>";
                                            } else {
                                                Cobertura += "      <option value='" + cValoresC[x] + "'>" + cValores[x] + arrCoberturas[i].cLeyendaDed + "</option>";
                                            }
                                        }
                                        Cobertura += "  </select>";
                                        Cobertura += "</div>";
                                        Columna += 1;
                                    }

                                    if (arrCoberturas[i].cVTipo != "") {
                                        if (Columna == 2) {
                                            Cobertura += "<div class='two'>";
                                        } else {
                                            Cobertura += "<div class='three'>";
                                        }
                                        Cobertura += "  <select nGuardar='2' class='selectAjustableMedio' name='cTipo' cSISEPlan='" + arrCoberturas[i].cSISEPlan + "' cSISE='" + arrCoberturas[i].cSISE + "' nIdNegocioPlan = '" + arrCoberturas[i].nIdNegocioPlan + "'>";
                                        var cValores = arrCoberturas[i].cVTipo.split("|");
                                        for (x = 0; x < cValores.length; x++) {
                                            if (arrCoberturas[i].cSISE == "10") {
                                                switch (cValores[x]) {
                                                    case "A":
                                                        Cobertura += "      <option value='" + cValores[x] + "'>VIAL VIAJES PLUS</option>";
                                                        break;
                                                    case "B":
                                                        Cobertura += "      <option value='" + cValores[x] + "'>VIAL VIAJES</option>";
                                                        break;
                                                    case "T":
                                                        Cobertura += "      <option value='" + cValores[x] + "'>VIAL VIAJES TOTAL CAR</option>";
                                                        break;
                                                    case "Y":
                                                        Cobertura += "      <option value='" + cValores[x] + "'>VIAL VIAJES TOTAL CAR PLUS</option>";
                                                        break;
                                                    default:
                                                        Cobertura += "      <option value='" + cValores[x] + "'>" + cValores[x] + "</option>";
                                                        break;
                                                }
                                            } else {
                                                Cobertura += "      <option value='" + cValores[x] + "'>" + cValores[x] + "</option>";
                                            }
                                        }
                                        Cobertura += "  </select>";
                                        Cobertura += "</div>";
                                    }
                                    break;
                                case 2:
                                    Cobertura += "<div class='one' style='text-align:left;'>";
                                    Cobertura += "  <label for='Chk" + arrCoberturas[i].nIdNegocioPlanCobertura + "' style='cursor:pointer;'>" + arrCoberturas[i].cNombre + ":</label>";
                                    Cobertura += "</div>";

                                    Cobertura += "<div class='two twochk'>";
                                    Cobertura += "  <input type='checkbox' id='Chk" + arrCoberturas[i].nIdNegocioPlanCobertura + "' nGuardar='2' name='cSuma' value='0' cSISEPlan='" + arrCoberturas[i].cSISEPlan + "' cSISE='" + arrCoberturas[i].cSISE + "' nIdNegocioPlan = '" + arrCoberturas[i].nIdNegocioPlan + "'/>";
                                    Cobertura += "</div>";
                                    break;
                            }

                            //Cobertura += "</div>";
                            Cobertura += "<div class='limpiar'></div>";
                            Cobertura += "</div>";

                            $("[name=Coberturas][nIdPlan=" + arrCoberturas[i].nIdNegocioPlan + "]").append(Cobertura);

                            switch (parseInt(arrCoberturas[i].nTipo)) {
                                case 0:
                                    $("[name=cSuma][nIdNegocioPlan=" + arrCoberturas[i].nIdNegocioPlan + "][cSISE=" + arrCoberturas[i].cSISE + "]").val(arrCoberturas[i].cDSuma);
                                    break;
                                case 1:
                                    $("[name=cSuma][nIdNegocioPlan=" + arrCoberturas[i].nIdNegocioPlan + "][cSISE=" + arrCoberturas[i].cSISE + "]").val(arrCoberturas[i].cDSuma);
                                    $("[name=cDeducible][nIdNegocioPlan=" + arrCoberturas[i].nIdNegocioPlan + "][cSISE=" + arrCoberturas[i].cSISE + "]").val(arrCoberturas[i].cDDeducible);
                                    $("[name=cTipo][nIdNegocioPlan=" + arrCoberturas[i].nIdNegocioPlan + "][cSISE=" + arrCoberturas[i].cSISE + "]").val(arrCoberturas[i].cDTipo);
                                    break;
                                case 2:
                                    if (arrCoberturas[i].cDSuma == 1) {
                                        $("[name=cSuma][nIdNegocioPlan=" + arrCoberturas[i].nIdNegocioPlan + "][cSISE=" + arrCoberturas[i].cSISE + "]").iCheck('check').trigger("on");
                                    }

                                    if (arrCoberturas[i].cDSuma == 2) {
                                        $("[name=cSuma][nIdNegocioPlan=" + arrCoberturas[i].nIdNegocioPlan + "][cSISE=" + arrCoberturas[i].cSISE + "]").iCheck('check').iCheck('disable').trigger("on");
                                    }
                                    break;
                            }

                            if (arrCoberturas[i].cSISE != "36") {
                                if (Fila == 0) {
                                    Fila = 1;
                                } else {
                                    Fila = 0;
                                }
                            }

                            if (arrCoberturas[i].cSISE == arrCoberturas[arrCoberturas.length - 1].cSISE) {
                                ArrPlanes2[Indice] = arrCoberturas[i].nIdNegocioPlan;
                                Indice += 1;
                            }

                            if (arrCoberturas[i].cSISE == arrCoberturas[arrCoberturas.length - 1].cSISE && ArrPlanes2.length == ArrPlanes.length - 1) {
                                $("#BtnCotizar").attr('disabled', false).removeClass('ui-state-disabled').val("Cotizar");
                                $("#TxtBuscaCP").attr('disabled', false).removeClass('ui-state-disabled').attr("placeholder", "");
                                $("#CmbEstado").attr('disabled', false).removeClass('ui-state-disabled');
                                $("#ChkValorConvenido").iCheck('enable');
                                $("#ChkValorFactura").iCheck('enable');

                                Cotizador.Parametros.bCotizar = true;

                                $('input[type=checkbox][nGuardar=2]').iCheck({
                                    checkboxClass: 'icheckbox_square-red'
                                });
                                $('input[type=radio][nGuardar=2]').iCheck({
                                    radioClass: 'iradio_square-red'
                                });

                                Cotizador.AgregarFuncionesEvento.TabPlan();
                                Cotizador.AgregarFuncionesEvento.lblPlan();
                                Cotizador.AgregarFuncionesEvento.GuardarCampo2();
                                Cotizador.AgregarFuncionesEvento.Numeros();
                                Cotizador.AgregarFuncionesEvento.NumerosLetras();
								Cotizador.AgregarFuncionesEvento.NumerosLetrasSin();
                                Cotizador.AgregarFuncionesEvento.NumerosPipe();
                                Cotizador.AgregarFuncionesEvento.BtnEnviar();
                                $("[name=nIdNegocioPlan][value=" + Cotizador.Parametros.cPSISEPlan + "]").iCheck('check').trigger("on");

                                switch (Cotizador.Parametros.nTipoCotizador) {
                                    case 2:
                                        $("#TxtValorFactura").show().trigger("focusout");
                                        break;
                                    case 4:
                                        if ($("#ChkSalvamento").is(":checked")) {
                                            $("#TxtSumaCS").show().trigger("focusout");
                                        } else {
                                            $("#TxtSumaSS").show().trigger("focusout");
                                        }
                                        break;
                                    case 8:
                                        $.ajax({
                                            type: 'POST',
                                            url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                                            data: {
                                                servicio: 'ActualizaSerieNivelada',
                                                cLlave: Cotizador.Parametros.DataGuide,
                                                cSuma: $("#TxtPrecioNivelada").val(),
                                                cTokenCor: ASHT.GetUrlParam("tokencor")[0]
                                            },
                                            success: function (data) {
                                                jQuery.globalEval(data);
                                            },
                                            timeout: 50000,
                                            dataType: "text",
                                            async: true
                                        });
                                        break;
                                    case 9:
                                        $("#TxtValorFactura2").show().trigger("focusout");
                                        break;
                                    case 10:
                                        $("#TxtValorFactura3").show().trigger("focusout");//TESLA
                                        break;
                                    case 11:
                                        $("#TxtValorFactura4").show().trigger("focusout");//TESLA
                                        $("#TxtValorFactura5").show().trigger("focusout");//Valos Adaptaciones
                                        break;
                                    default:
                                        $("#CmbVersion").trigger("change");
                                        break;
                                }

                                var FechaAct = new Date();
                                var ModeloVeh = ""
                                if (Cotizador.Parametros.nTipoCotizador == 2) {
                                    ModeloVeh = $("#CmbModeloM").val();
                                } else {
                                    ModeloVeh = $("#CmbModelo").val();
                                }
                                //if (FechaAct.getFullYear() <= $("#CmbModelo").val() || (FechaAct.getFullYear() == 2023 && $("#CmbModelo").val() == 2022 && FechaAct.getMonth() < 4)) {
                                //if (FechaAct.getFullYear() <= ModeloVeh) {
                                if (FechaAct.getFullYear() <= ModeloVeh || (ModeloVeh == FechaAct.getFullYear() - 1 && FechaAct.getMonth() < 3)) {
                                    switch (Cotizador.Parametros.nFactura) {
                                        case 0:
                                            $("[name=ValorFactura]").hide();
                                            break;
                                        case 1:
                                            $("[name=ValorFactura]").show();
                                            break;
                                        case 2:
                                            $("[name=ValorFactura]").show();
                                            $("#ChkValorFactura").iCheck('check').trigger("on");
                                            break;
                                        case 3:
                                            $("[name=ValorFactura]").show();
                                            $("#ChkValorFactura").iCheck('check').iCheck('disable').trigger("on");
                                            break;
                                    }
                                    $("[cSISE=39]").show();
                                    $("[cSISE=36]").hide();
                                    //$("[name=ValorConvenido]").hide();

                                    //[Tipos Indemnizacion]
                                    if (Cotizador.Parametros.bExisteVC) {
                                        switch (Cotizador.Parametros.nConvenido) {
                                            case 0:
                                                $("[name=ValorConvenido]").hide();
                                                break;
                                            case 1:
                                                $("[name=ValorConvenido]").show();
                                                break;
                                            case 2:
                                                $("[name=ValorConvenido]").show();
                                                $("#ChkValorConvenido").iCheck('check').trigger("on");
                                                break;
                                            case 3:
                                                $("[name=ValorConvenido]").show();
                                                $("#ChkValorConvenido").iCheck('check').iCheck('disable').trigger("on");
                                                break;
                                        }
                                    }

                                } else {
                                    switch (Cotizador.Parametros.nConvenido) {
                                        case 0:
                                            $("[name=ValorConvenido]").hide();
                                            break;
                                        case 1:
                                            $("[name=ValorConvenido]").show();
                                            break;
                                        case 2:
                                            $("[name=ValorConvenido]").show();
                                            $("#ChkValorConvenido").iCheck('check').trigger("on");
                                            break;
                                        case 3:
                                            $("[name=ValorConvenido]").show();
                                            $("#ChkValorConvenido").iCheck('check').iCheck('disable').trigger("on");
                                            break;
                                    }
                                    if ((FechaAct.getFullYear() - 10) < $("#CmbModelo").val()) {
                                        $("[cSISE=33]").show();
                                    } else {
                                        $("[cSISE=33]").hide();
                                    }
                                    if ((FechaAct.getFullYear() - 10) <= $("#CmbModelo").val()) {
                                        $("[cSISE=36]").show();
                                        $("[cSISE=39]").hide();
                                    } else {
                                        $("[cSISE=36]").hide();
                                        $("[cSISE=39]").hide();
                                    }
                                    //if ((FechaAct.getFullYear() - 10) < $("#CmbModelo").val()) {
                                    //    $("[cSISE=33]").show();
                                    //    $("[cSISE=36]").show();
                                    //    $("[cSISE=39]").hide();
                                    //} else {
                                    //    $("[cSISE=33]").hide();
                                    //    $("[cSISE=39]").hide();
                                    //    $("[cSISE=36]").hide();
                                    //}
                                    $("[name=ValorFactura]").hide();
                                }
                                //if (FechaAct.getFullYear() > $("#CmbModelo").val()) {
                                  
                                //} else {
                                   
                                //}

                                var nEstado = $("#CmbEstado").val();

                                if (nEstado == 19 || nEstado == 2 || nEstado == 26 || nEstado == 5 || nEstado == 8 || nEstado == 28) {
                                    $("[name=DatosConductor]").find("input, select").each(function () {
                                        $(this).addClass("Requerido");
                                    });
                                    /*if ($("#CmbUso").val() != "29" && $("#CmbUso").val() != "84") {*/
                                    //RC USA
                                    if (Cotizador.Parametros.MostrarRCUSA && Cotizador.Parametros.RCUSAObligatoria) {
                                        $("[cSISE=27][cSISEPlan=01]").iCheck('check');
                                        $("[cSISE=27][cSISEPlan=01]").iCheck('disable');
                                        $("[cSISE=27][cSISEPlan=02]").iCheck('check');
                                        $("[cSISE=27][cSISEPlan=02]").iCheck('disable');
                                        $("[cSISE=27][cSISEPlan=03]").iCheck('check');
                                        $("[cSISE=27][cSISEPlan=03]").iCheck('disable');
                                        $("[cSISE=27][cSISEPlan=04]").iCheck('check');
                                        $("[cSISE=27][cSISEPlan=04]").iCheck('disable');
                                        $("[cSISE=27][cSISEPlan=29]").iCheck('check');
                                        $("[cSISE=27][cSISEPlan=29]").iCheck('disable');
                                    }
                                } else {
                                    $("[name=DatosConductor]").find("input, select").each(function () {
                                        $(this).removeClass("Requerido");
                                    });
                                    //RC USA no fronterizos quita el disabled
                                    //$("[cSISE=27][cSISEPlan=01]").iCheck('enable');

                                    //RC USA
                                    //if ($("#CmbUso").val() == "84") {
                                    //    $("[cSISE=27][cSISEPlan=01]").iCheck('disable');
                                    //    $("[cSISE=27]").hide();
                                    //}
                                    if (!Cotizador.Parametros.MostrarRCUSA) {
                                        $("[cSISE=27]").hide();
                                    } else {
                                        $("[cSISE=27]").show();
                                        //if (Cotizador.Parametros.RCUSAObligatoria) {
                                        //    $("[cSISE=27][cSISEPlan=01]").iCheck('check').iCheck('disable').trigger("on");
                                        //    $("[cSISE=27][cSISEPlan=02]").iCheck('check').iCheck('disable').trigger("on");
                                        //    $("[cSISE=27][cSISEPlan=03]").iCheck('check').iCheck('disable').trigger("on");
                                        //    $("[cSISE=27][cSISEPlan=04]").iCheck('check').iCheck('disable').trigger("on");
                                        //    $("[cSISE=27][cSISEPlan=29]").iCheck('check').iCheck('disable').trigger("on");
                                        //}
                                    }
                                }

                                switch (Cotizador.Parametros.nTipoCotizador) {
                                    case 2:
                                    case 8:
                                    case 9:
                                        break;
                                    default:
                                        if ($("#CmbTipoCarga").val() == "E" || $("#CmbTipoCarga").val() == 0) {
                                            if ($("#CmbTipoVehiculo").val() == null) {
                                                if ($("#CmbTipoVehiculoFL").val() == 100) {
                                                    $("#CmbUso").val("01").trigger("change").attr('disabled', true).addClass('ui-state-disabled');
                                                } else {
                                                    $("#CmbUso").val("37").trigger("change").attr('disabled', true).addClass('ui-state-disabled');
                                                }
                                            } else {
                                                if ($("#CmbTipoVehiculo").val() == 100) {
                                                    $("#CmbUso").val("01").trigger("change").attr('disabled', true).addClass('ui-state-disabled');
                                                } else {
                                                    $("#CmbUso").val("01").trigger("change").attr('disabled', true).addClass('ui-state-disabled');
                                                }
                                            }
                                            if (Cotizador.Parametros.MostrarRCUSA) {
                                                $("[cSISE=27]").show();
                                            }
                                            $("[cSISE=09]").show();
                                        } else {
                                            if (Cotizador.Parametros.nTipoCotizador != 11) {
                                                $("#CmbUso").val("29").trigger("change").attr('disabled', true).addClass('ui-state-disabled');
                                            }
                                            $("[name=cVigencia] option[value=2]").remove();
                                            $("[name=cVigencia] option[value=43]").remove();
                                            $("[name=cVigencia] option[value=44]").remove();

                                            var IdSetIntervalCob = setInterval(function () {
                                                if (Cotizador.Parametros.bCotizar) {
                                                    if (!Cotizador.Parametros.MostrarRCUSA) {
                                                        $("[cSISE=27]").hide();
                                                    }
                                                    $("[cSISE=09]").hide();
                                                    $("[type=checkbox][cSise=09]").iCheck("uncheck");
                                                    //$("[type=checkbox][cSise=27]").iCheck("uncheck");
                                                    $("[cSISE=40]").remove();
                                                    Cotizador.Parametros.bCotizar = false;
                                                    clearInterval(IdSetIntervalCob);
                                                }
                                            }, 1000);
                                        }
                                        break;
                                }
                            }
                        }
                    }
                },
                timeout: 50000,
                dataType: "text",
                async: false
            });
        }

        $.ajax({
            type: 'POST',
            url: Parametros.Link + 'DataProviders/Cotizador.aspx',
            data: {
                servicio: 'EliminarValores',
                nIdNegocio: Cotizador.Parametros.nIdNegocio,
                cLlave: Cotizador.Parametros.DataGuide,
                ccAgente: Cotizador.Parametros.ccAgente,
                cTokenCor: ASHT.GetUrlParam("tokencor")[0]
            },
            success: function (data) {
                jQuery.globalEval(data);
            },
            timeout: 50000,
            dataType: "text",
            async: true
        });
    },

    //[Proyecto IFV]
    ValidaIFV: function () {
        $.ajax({
            type: 'POST',
            url: Parametros.Link + 'DataProviders/Cotizador.aspx',
            data: {
                servicio: 'ConsultaIFV',
                cLlave: Cotizador.Parametros.DataGuide,
                bRenovacion: Cotizador.Parametros.bRenovacion,
                cNegocioEspRena: Cotizador.Parametros.cNegocioEspRena,
                nTipoCotizador: Cotizador.Parametros.nTipoCotizador,
                cTokenCor: ASHT.GetUrlParam("tokencor")[0]
            },
            success: function (data) {
                jQuery.globalEval(data);
                //[Proyecto IFV]
                if (Cotizador.Parametros.bMostrarIFV == "1") {
                    //ASHT.MensajeSimple('EN CASO DE EMITIR LA PRESENTE COTIZACION ANA COMPAÑIA DE SEGUROS S.A.DE C.V.PODRA SOLICITAR LA INSPECCION FISICA VEHICULAR DE LA UNIDA, LA CUAL CONSISTE EN UNA SERIE DE FOTOGRAFIAS REALIZADAS POR EL CLIENTE CUALQUIER DIA Y HORA HABIL MEDIANTE PLATAFORMAS DIGITALES O PERSONAS DEBIDAMENTE AUTORIZADAS POR LA COMPAÑIA.', '::Aviso::', '', '400', '250');
                    //ASHT.MensajeSimpleIFV('EN CASO DE EMITIR LA PRESENTE COTIZACION ANA COMPAÑÍA DE SEGUROS, S.A DE C.V. PODRA SOLICITAR LA REALIZACION DE UNA INSPECCION FISICA VEHICULAR DE LA UNIDAD, MEDIANTE PLATAFORMAS DIGITALES O PERSONAS DEBIDAMENTE AUTORIZADAS, PODRAS ENCONTRAR EL DETALLE DE ESTE PROCESO DENTRO DEL APARTADO DE INSPECCION FISICA VEHICULAR DE LAS CONDICIONES GENERALES DE TU POLIZA.', '::Aviso::', '', '500', '300');
                    //ASHT.MensajeSimpleIFV('EN CASO DE EMITIR LA PRESENTE COTIZACION ANA COMPAÑÍA DE SEGUROS, S.A DE C.V. PODRÁ SOLICITAR LA REALIZACON DE UNA INSPECCION FISICA VEHICULAR DE LA UNIDAD, LA CUAL CONSISTE EN LA TOMA Y CARGA DE UNA SERIE DE FOTOGRAFIAS REALIZADAS POR EL CLIENTE EN CUALQUIER DÍA Y HORA HÁBIL, MEDIANTE PLATAFORMAS DIGITALES O PERSONAS DEBIDAMENTE AUTORIZADAS POR ANA COMPAÑÍA DE SEGUROS, S.A DE C.V.', '::Aviso::', '', '500', '300');
                    //ASHT.MensajeSimpleIFV('En caso de emitir la presente cotizacion podrá ser sujeta a una Inspeccion Fisica Vehicular de la unidad, la cual consiste en la toma y carga de una serie de fotografias realizadas por el cliente en cualquier día y hora hábil, mediante plataformas digitales o personas debidamente autorizadas por ANA Compañía de Seguros S.A de C.V.', '::Aviso::', '', '500', '300');
                    //ASHT.MensajeSimpleIFV('En caso de emitir la presente cotización ANA Compañía de Seguros, S.A. de C.V. podrá solicitar se realice a la unidad a asegurar una Inspección Física Vehicular, la cual consiste en la toma y carga de una serie de fotografías realizadas por el cliente en cualquier día y hora hábil o personas debidamente autorizadas por ANA Compañía de Seguros S.A de C.V. mediante plataformas digitales. El proceso se encuentra detallado dentro de la cláusula de Inspección Vehicular de las Condiciones Generales que rigen el contrato de seguro. ', '::Aviso::', '', '500', '300');
                    ASHT.MensajeSimpleIFV('En caso de emitir la presente cotización, A.N.A. Compañía de Seguros S.A. de C.V. podrá solicitar se realice a la unidad a asegurar una Inspección Física Vehicular, la cual consiste en la toma y carga de una serie de fotografías realizadas por el cliente en cualquier día y hora hábil mediante plataformas digitales o con la asesoría de personal debidamente autorizado por A.N.A.Compañía de Seguros S.A.de C.V.El proceso se encuentra detallado dentro de la cláusula de Inspección Vehicular de las Condiciones Generales que rigen el contrato de seguro y están a su disposición en el portal de la compañía.', '::Aviso::', '', '500', '300');
                }
            },
            timeout: 50000,
            dataType: "text",
            async: false
        });
    },

    //[Proyecto GPS]
    ValidaGPS: function () {
        $.ajax({
            type: 'POST',
            url: Parametros.Link + 'DataProviders/Cotizador.aspx',
            data: {
                servicio: 'ConsultaGPS',
                cLlave: Cotizador.Parametros.DataGuide,
                bRenovacion: Cotizador.Parametros.bRenovacion,
                cNegocioEspRena: Cotizador.Parametros.cNegocioEspRena,
                nTipoCotizador: Cotizador.Parametros.nTipoCotizador,
                cTokenCor: ASHT.GetUrlParam("tokencor")[0]
            },
            success: function (data) {
                jQuery.globalEval(data);
                if (Cotizador.Parametros.bMostrarGPS == "1") {
                    ASHT.MensajeSimpleIFV('La unidad descrita en la presente cotización es posible candidata un beneficio de instalación de dispositivo GPS. En caso de emitir y que se cumplan los requisitos del programa, este beneficio se especificara en su póliza con los textos pertinentes.', '::Aviso::', '', '500', '300');
                }
            },
            timeout: 50000,
            dataType: "text",
            async: false
        });
    },

    //[Proyecto Deducibles min y restricciones]
    ValidaDYR: function () {
        $.ajax({
            type: 'POST',
            url: Parametros.Link + 'DataProviders/Cotizador.aspx',
            data: {
                servicio: 'ConsultaDYR',
                nIniciar: Cotizador.Parametros.nIniciar,
                cLlave: Cotizador.Parametros.DataGuide,
                bRenovacion: Cotizador.Parametros.bRenovacion,
                cNegocioEspRena: Cotizador.Parametros.cNegocioEspRena,
                nTipoCotizador: Cotizador.Parametros.nTipoCotizador,
                cTokenCor: ASHT.GetUrlParam("tokencor")[0]
            },
            success: function (data) {
                jQuery.globalEval(data);
                var deds_min = $("option[nmin=1]").length;
                $("option[nmin=1]").remove();
                if (Cotizador.Parametros.bDedMin == "1" && Cotizador.Parametros.bCotRestringida == "0") {
                    //busca select de coberturas Daños Materiales
                    if (Cotizador.Parametros.nMinDM > 0) {
                        $("select[csise=02]").each(function () {
                            var bdeleteDM = false; var basignadoDM = false;
                            var $this = $(this);
                            if ($(this).find("option").length > 1) {
                                $(this).find("option").each(function () {
                                    //Valida que por lo menos quede 1 opcion
                                    if ($this.find("option").length > 1) {
                                        //Recorre opciones si son menores al minimo las borra
                                        if (parseInt($(this).html().replace("%", "")) < Cotizador.Parametros.nMinDM) {
                                            $(this).hide();
                                            bdeleteDM = true;
                                        } else {
                                            if (bdeleteDM && !basignadoDM) {
                                                if (parseInt($(this).html().replace("%", "")) == Cotizador.Parametros.nMinDM) {
                                                    $this.val($(this).val()).trigger("change");
                                                } else {
                                                    //$this.append("<option value='" + Cotizador.Parametros.cCifMinDM + "' nmin='1'>" + Cotizador.Parametros.nMinDM + "%</option>")
                                                    $this.prepend("<option value='" + Cotizador.Parametros.cCifMinDM + "' nmin='1'>" + Cotizador.Parametros.nMinDM + "%</option>")
                                                }                                                
                                                basignadoDM = true;
                                            }
                                        }
                                    } else {
                                        if (parseInt($(this).html().replace("%", "")) < Cotizador.Parametros.nMinDM) {
                                            $(this).hide();
                                            bdeleteDM = true;
                                            $this.append("<option value='" + Cotizador.Parametros.cCifMinDM + "' nmin='1'>" + Cotizador.Parametros.nMinDM + "%</option>")
                                        } else {
                                            if (bdeleteDM && !basignadoDM) {
                                                $this.val($(this).val()).trigger("change");
                                                basignadoDM = true;
                                            }
                                        }
                                    }
                                });
                            } else {
                                //var algo = $this[0].innerText.trim().replace("%", "");
                                if (parseInt($this[0].innerText.trim().replace("%", "")) < Cotizador.Parametros.nMinDM) {
                                    $this[0][0].hidden = true;
                                    bdeleteDM = true;
                                    $this.append("<option value='" + Cotizador.Parametros.cCifMinDM + "' nmin='1'>" + Cotizador.Parametros.nMinDM + "%</option>")
                                } else {
                                    if (bdeleteDM && !basignadoDM) {
                                        $this.val($(this).val()).trigger("change");
                                        basignadoDM = true;
                                    }
                                }
                            }
                        });
                        $("option[nmin=1]").attr("selected", true).trigger("change");
                    }
                    if (Cotizador.Parametros.nMinRT > 0) {
                        $("select[csise=04]").each(function () {
                            var bdeleteRT = false; var basignadoRT = false;
                            var $this = $(this);
                            if ($(this).find("option").length > 1) {
                                $(this).find("option").each(function () {
                                    //Valida que por lo menos quede 1 opcion
                                    if ($this.find("option").length > 1) {
                                        //Recorre opciones si son menores al minimo las borra
                                        if (parseInt($(this).html().replace("%", "")) < Cotizador.Parametros.nMinRT) {
                                            $(this).hide();
                                            bdeleteRT = true;
                                        } else {
                                            if (bdeleteRT && !basignadoRT) {
                                                //$(this).attr("selected", true).trigger("change");
                                                if (parseInt($(this).html().replace("%", "")) == Cotizador.Parametros.nMinRT) {
                                                    $this.val($(this).val()).trigger("change");
                                                } else {
                                                    //$this.append("<option value='" + Cotizador.Parametros.cCifMinRT + "' nmin='1'>" + Cotizador.Parametros.nMinRT + "%</option>")
                                                    $this.prepend("<option value='" + Cotizador.Parametros.cCifMinRT + "' nmin='1'>" + Cotizador.Parametros.nMinRT + "%</option>")
                                                }
                                                basignadoRT = true;
                                            }
                                        }
                                    } else {
                                        if (parseInt($(this).html().replace("%", "")) < Cotizador.Parametros.nMinRT) {
                                            $(this).hide();
                                            bdeleteRT = true;
                                            $this.append("<option value='" + Cotizador.Parametros.cCifMinRT + "' nmin='1'>" + Cotizador.Parametros.nMinRT + "%</option>")
                                        } else {
                                            if (bdeleteRT && !basignadoRT) {
                                                //$(this).attr("selected", true).trigger("change");
                                                $this.val($(this).val()).trigger("change");
                                                basignadoRT = true;
                                            }
                                        }
                                    }
                                });
                            } else {
                                if (parseInt($this[0].innerText.trim().replace("%", "")) < Cotizador.Parametros.nMinRT) {
                                    $this[0][0].hidden = true;
                                    bdeleteRT = true;
                                    $this.append("<option value='" + Cotizador.Parametros.cCifMinRT + "' nmin='1'>" + Cotizador.Parametros.nMinRT + "%</option>")
                                } else {
                                    if (bdeleteRT && !basignadoRT) {
                                        $this.val($(this).val()).trigger("change");
                                        basignadoRT = true;
                                    }
                                }
                            }
                        });
                        $("option[nmin=1]").attr("selected", true).trigger("change");
                    }
                } else {
                    //$("option[nmin=1]").remove();
                    if (deds_min > 0) {
                        $("select[csise=02]").each(function () {
                            var $this = $(this);
                            var bAsignado = false;
                            //if ($(this).find("option").length > 1) {
                            //    bUnico = false;
                            //}
                            $(this).find("option").each(function () {
                            //$this.find("option").each(function () {
                                $(this).show();
                                if (!bAsignado) {
                                    //$this.val($(this).val()).trigger("change");
                                    $this.val($(this).val()).trigger("change");
                                    bAsignado = true;
                                }
                                //if (bUnico) {
                                //    $(this).show().attr("selected", true).trigger("change");
                                //} else {
                                //    $(this).show();
                                //}
                            });                        
                        });
                        $("select[csise=04]").each(function () {
                            var $this = $(this);
                            var bAsignado = false;
                            //if ($(this).find("option").length > 1) {
                            //    bUnico = false;
                            //}
                            $(this).find("option").each(function () {
                                $(this).show();
                                if (!bAsignado) {
                                    $this.val($(this).val()).trigger("change");
                                    bAsignado = true;
                                }
                            //$this.find("option").each(function () {
                                //if (bUnico) {
                                //    $(this).show().attr("selected", true).trigger("change");
                                //} else {
                                //    $(this).show();
                                //}
                            });
                        });
                    }
                }
            },
            timeout: 50000,
            dataType: "text",
            async: false
        });
    },

    CotizarGeneral: function () {
        if ($("#ChkRecargo").val() == 1) {
            if ($("#TxtDescuento").val() > Cotizador.Parametros.nRecargoMax) {
                Cotizador.Parametros.Mensaje = "El recargo excede al permitido. " + Cotizador.Parametros.nRecargoMax + "%";
                return true;
            }

            if ($("#TxtDescuento").val() < Cotizador.Parametros.nRecargoMin) {
                Cotizador.Parametros.Mensaje = "El recargo es menor al autorizado. " + Cotizador.Parametros.nRecargoMin + "%";
                return true;
            }
        } else {
            if (Cotizador.Parametros.nAutorizado > 0) {
                if ($("#TxtDescuento").val() < 0) {
                    Cotizador.Parametros.Mensaje = "El descuento no puede ser menor a 0";
                    $("#TxtDescuento").val(Cotizador.Parametros.nAutorizado).trigger("focusout");
                    return true;
                }
                if ($("#TxtDescuento").val() > Cotizador.Parametros.nDescuento) {
                    if ($("#TxtDescuento").val() != Cotizador.Parametros.nAutorizado) {
                        Cotizador.Parametros.Mensaje = "El descuento excede al permitido y no es el autorizado. " + Cotizador.Parametros.nDescuento + "%";
                        $("#TxtDescuento").val(Cotizador.Parametros.nAutorizado).trigger("focusout");
                        return true;
                    }
                }
            } else {
                switch ($("#CmbVigencia").val()) {
                    case "1":
                    case "45":
                    case "46":
                        if ($("#TxtDescuento").val() < 0) {
                            Cotizador.Parametros.Mensaje = "El descuento no puede ser menor a 0";
                            $("#TxtDescuento").val(Cotizador.Parametros.nAutorizado).trigger("focusout");
                            return true;
                        }
                        if ($("#TxtDescuento").val() > Cotizador.Parametros.nDescuento) {
                            if (Cotizador.Parametros.bRenovacion) {

                            } else {
                                Cotizador.Parametros.Mensaje = "El descuento excede al permitido. " + Cotizador.Parametros.nDescuento + "%";
                                $("#TxtDescuento").val(Cotizador.Parametros.nDescuento).trigger("focusout");
                                return true;
                            }
                        }
                        break;
                    default:
                        if ($("#TxtDescuento").val() < 0) {
                            Cotizador.Parametros.Mensaje = "El descuento no puede ser menor a 0";
                            $("#TxtDescuento").val(Cotizador.Parametros.nAutorizado).trigger("focusout");
                            return true;
                        }
                        if ($("#TxtDescuento").val() > Cotizador.Parametros.nDescuento2) {
                            Cotizador.Parametros.Mensaje = "El descuento excede al permitido. " + Cotizador.Parametros.nDescuento2 + "%";
                            $("#TxtDescuento").val(Cotizador.Parametros.nDescuento2).trigger("focusout");
                            return true;
                        }
                        break;
                }
            }
        }

        //[Proyecto Deducibles min y restricciones]
        if (Cotizador.Parametros.bCotRestringida == "1") {
            Cotizador.Parametros.Mensaje = "Vehículo con restricción de cotización y emisión.";            
            return true;
        }

        var ArrNegociosPlanes = Cotizador.Parametros.nIdNegocioPlanes.split(",")
        $.ajax({
            type: 'POST',
            url: Parametros.Link + 'DataProviders/Cotizador.aspx',
            data: {
                servicio: 'ConsultaVariables',
                ccAgente: Cotizador.Parametros.ccAgente,
                cLog: ASHT.GetUrlParam("token")[0],
                cLogCor: ASHT.GetUrlParam("tokencor")[0]
            },
            success: function (data) {
                jQuery.globalEval(data);
                for (var i = 0; i < ArrNegociosPlanes.length - 1; i++) {
                    if (Cotizador.Parametros.bPermiteCotizar) {
                        Cotizador.Cotizar(ArrNegociosPlanes[i]);
                    }
                }
            },
            timeout: 50000,
            dataType: "text",
            async: false
        });

        return false;
    },
    Cotizar: function (nIdNegocioPlan) {
        $("[name=PrimaTotal][nPaquete=" + nIdNegocioPlan + "]").html("Cotizando...");
        $("[name=PrimerPago][nPaquete=" + nIdNegocioPlan + "]").html("---");
        $("[name=Subsecuente][nPaquete=" + nIdNegocioPlan + "]").html("---");
        $("#BtnComprar").attr('disabled', true).addClass('ui-state-disabled');
		
		//Valida el tipo de campo adicional (1.text 2.select 3.checkbox 4. date) y manda el valor al servicio ajax
		//Checar la tabla NegocioCampoAdicional, en caso 2 y 3 se pueden separar por pipes varias opciones
		
		var campoAdicional = document.getElementById("campoAdicionalCotizador");
        var nombreCampoAdicional = document.getElementById("campoAdicionalNombre");
        var campoAdicionalVal = "";


        if (campoAdicional) { // Verifica si el elemento existe

            if (campoAdicional.type == "text" || campoAdicional.type == "date") {
                campoAdicionalVal = nombreCampoAdicional.textContent + ": " + campoAdicional.value;
                
            }
            else {
                campoAdicionalVal = nombreCampoAdicional.textContent + ": "+ campoAdicional.options[campoAdicional.selectedIndex].value;
            }
            
        }

        else {

            var contadorCampo_checkbox = 0;
            var checkbox_adicional;

            while ((checkbox_adicional = document.getElementById('campoAdicionalCotizador' + contadorCampo_checkbox)) !== null) {

                if (checkbox_adicional.checked) {
                campoAdicionalVal += $("#campoAdicionalCotizador" + contadorCampo_checkbox).val() + "|";
                    }
                contadorCampo_checkbox++;
            }

            if (campoAdicionalVal.endsWith("|")) {
                campoAdicionalVal = campoAdicionalVal.slice(0, -1);
            }

        }

        if (campoAdicionalVal == "" || campoAdicionalVal == ": " || campoAdicionalVal == ": Sin datos adicionales") {
            campoAdicionalVal = "Sin datos adicionales";
        }

		
        $.ajax({
            type: 'POST',
            url: Parametros.Link + 'DataProviders/Cotizador.aspx',
            data: {
                servicio: 'Cotizar',
                nIdNegocio: Cotizador.Parametros.nIdNegocio,
                nIdNegocioPlan: nIdNegocioPlan,
                cLlave: Cotizador.Parametros.DataGuide,
                cTipo: "C",
                nCategoria: $("#CmdTipoVehiculo").val(),
                cDescripcionMarca: $("#marca option:selected").text(),
                cDescripcion: $("#TxtDescripcion").val(),
                nTipoCotizador: Cotizador.Parametros.nTipoCotizador,
                Poliza: Cotizador.Parametros.Poliza,
                ccAgente: Cotizador.Parametros.ccAgente,
                nIniciar: Cotizador.Parametros.nIniciar,
                cAgente: Cotizador.Parametros.cAgente,
                nNivel: Cotizador.Parametros.nNivel,
                cAgenteAp: ASHT.GetUrlParam("tokenAp")[0],
                cTokenCor: ASHT.GetUrlParam("tokencor")[0],
                bMultiFormaPago: Cotizador.Parametros.bMultiFormaPago,
                bRenovacion: Cotizador.Parametros.bRenovacion,
                cNegocioEspRena: Cotizador.Parametros.cNegocioEspRena,
                nDerechoRena: Cotizador.Parametros.nDerechoRena,
                nTextoABC: Cotizador.Parametros.bTextoABC,
                //[Proyecto IFV]
                bMostrarIFV: Cotizador.Parametros.bMostrarIFV,
                fInicioFuturo: $('#TxtInicioVigencia').val(),
                //[Proyecto GPS]
                bMostrarGPS: Cotizador.Parametros.bMostrarGPS
            },
            success: function (data) {
                jQuery.globalEval(data);

                if ($("[name=PrimaTotal]:contains('Cotizando')").length == 0) {
                    $("#BtnComprar").attr('disabled', false).removeClass('ui-state-disabled');
                    if (Cotizador.Parametros.bSegCot) {
                        var montos = "";
                        $("#DvCotizacion").find("[name=TabPlan]").each(function (index) {
                            var $this = $(this);
                            var nIdNegocio = $this.attr("ntab");
                            montos += $("[name=lblPlan][ntab=" + nIdNegocio + "]").html() + "-"
                            montos += $("[name=PrimaTotal][nPaquete=" + nIdNegocio + "]").html() + "|"
                        });
				
                        $.ajax({
                            type: 'POST',
                            url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                            data: {
                                servicio: 'EnviarCotizacion',
                                cLlave: Cotizador.Parametros.DataGuide,
                                nTipoCotizador: Cotizador.Parametros.nTipoCotizador,
                                cCorreoAgente: Cotizador.Parametros.cCorreoAgente,
                                cNombreCliente: $("#TxtNombreCliente").val(),                                
                                cTelCliente: $("#cTelefonoDatos").val(),
                                cCorreoCliente: $("#cCorreoDatos").val(),
								cCampoAdicionalVal: campoAdicionalVal,
                                cMontos: montos,
                                nIdNegocio: Cotizador.Parametros.nIdNegocio
                            },
                            success: function (data) {
                                jQuery.globalEval(data);
                            },
                            timeout: 50000,
                            dataType: "text",
                            async: true
                        });                                                                            
                    }
                    Cotizador.ValidaDisponibilidad();
                }
            },
            timeout: 50000,
            dataType: "text",
            async: true
        });
    },

    Emitir: function () {
        $("#BtnEmitir").attr('disabled', true).addClass('ui-state-disabled');
        $("#ILoad3").show();

        //    ************ DESARROLLO SEGURO DE VIDA NO NECESARIO
        //var cBeneficiarios = '';
        //try {
        //    $("[name=DvBeneficiarios]").each(function () {
        //        cBeneficiarios += "{primerApellido:'" + $(this).find("[name=APaterno]").val() + "',"
        //        cBeneficiarios += "segundoApellido:'" + $(this).find("[name=AMaterno]").val() + "',"
        //        cBeneficiarios += "nombre:'" + $(this).find("[name=Nombre]").val() + "',"
        //        cBeneficiarios += "parentesco:'" + $(this).find("[name=Parentesco]").val() + "',"
        //        cBeneficiarios += "porcentaje:'" + $(this).find("[name=Porcentaje]").val() + "'},"
        //    });
        //} catch (e) {
        //    console.log(e.message);
        //}

        $.ajax({
            type: 'POST',
            url: Parametros.Link + 'DataProviders/Cotizador.aspx',
            data: {
                servicio: 'Cotizar',
                nIdNegocio: Cotizador.Parametros.nIdNegocio,
                nIdNegocioPlan: 0,
                cLlave: Cotizador.Parametros.DataGuide,
                cTipo: "E",
                nCategoria: $("#CmdTipoVehiculo").val(),
                cDescripcionMarca: $("#marca option:selected").text(),
                cDescripcion: $("#TxtDescripcion").val(),
                nTipoCotizador: Cotizador.Parametros.nTipoCotizador,
                Poliza: Cotizador.Parametros.Poliza,
                ccAgente: Cotizador.Parametros.ccAgente,
                nIniciar: Cotizador.Parametros.nIniciar,
                cAgente: Cotizador.Parametros.cAgente,
                nNivel: Cotizador.Parametros.nNivel,
                cAgenteAp: ASHT.GetUrlParam("tokenAp")[0],
                cTokenCor: ASHT.GetUrlParam("tokencor")[0],
                //    ************ DESARROLLO SEGURO DE VIDA NO NECESARIO
                //cBeneficiarios: cBeneficiarios,
                //nSexo: $("#CmbSexo").val(), 
                CDomiciliar: $("#CmbDomiciliar").val(),
                cCorreoAgente: Cotizador.Parametros.cCorreoAgente,
                cNombreCliente: $("#TxtNombreCliente").val(),
                cTelCliente: $("#cTelefonoDatos").val(),
                cCorreoCliente: $("#cCorreoDatos").val(),
                cMSIPago: $("#MSIPago").val(),
                cInstBanc: Cotizador.Parametros.TipoTarjeta,
                bRenovacion: Cotizador.Parametros.bRenovacion,
                cNegocioEspRena: Cotizador.Parametros.cNegocioEspRena,
                nDerechoRena: Cotizador.Parametros.nDerechoRena
            },
            success: function (data) {
                jQuery.globalEval(data);
                $("#ILoad3").hide();
                $("#BtnEmitir").attr('disabled', false).removeClass('ui-state-disabled');

            },
            timeout: 50000,
            dataType: "text",
            async: true
        });
    },

    DialogGuardar: function () {
        var HTML = '';
        HTML += '   <div id="FrmTipoCotizador">';
        HTML += '       <div class="ttSeccion f1b animate">Guardar cotización</div>';
        HTML += '       <div class="f1 stack animate">';
        HTML += '           <div class="one">';
        HTML += '               <div class="boxSelectCotizador">';
        HTML += '                   <label class="txtEtiqueta">Nombra la cotización para identificarla y despues dale click en "Guardar".</label>';
        HTML += '                   <input class="inputTxtAjustable Requerido" type="text" nguardar="1" id="TxtCotizacion" maxlength="40">';
        HTML += '               </div>';
        HTML += '           </div>';
        HTML += '           <div class="limpiar"></div>';
        HTML += '       </div>';
        HTML += '       <div class="separador"></div>';
        HTML += '       <div class="f1 animate" style="text-align:right">';
        HTML += '           <div class="centrar">';
        HTML += '           <input id="BtnGuardar" class="btnCotizador" type="button" value="Guardar" />';
        HTML += '           <input id="BtnCancelar" class="btnCotizador" type="button" value="Cancelar" />';
        HTML += '           </div>';
        HTML += '       </div>';
        HTML += '   </div>';


        $("<div id='FrmGuardarCotizacion'>" + HTML + "</div>").dialog({
            title: "Registro Vehículo",
            width: "auto",
            modal: true,
            resizable: false,
            show: "fade",
            hide: "fade",
            open: function () {
                $(".ui-dialog-titlebar").hide();
                Cotizador.AgregarFuncionesEvento.BtnGuardar(this);
                Cotizador.AgregarFuncionesEvento.BtnCancelar(this);
            },
            close: function () {
                $(this).remove();
            }
        });
    },

    GuardarCotizacion: function (_this) {
        var Mensaje = "";
        if (!Cotizador.ValidaRequeridos("#FrmGuardarCotizacion")) {
            $.ajax({
                type: 'POST',
                url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                data: {
                    servicio: 'GuardarCotizacion',
                    cLlave: Cotizador.Parametros.DataGuide,
                    cCotizacion: $("#TxtCotizacion").val(),
                    ccAgente: Cotizador.Parametros.ccAgente,
                    cTokenCor: ASHT.GetUrlParam("tokencor")[0]
                },
                success: function (data) {
                    jQuery.globalEval(data);

                    if (bExito) {
                        $(_this).dialog("close");
                        ASHT.MensajeSimple("La cotización se guardo con exito.", "::Advertencia::", "", "auto", "auto");
                    } else {
                        ASHT.MensajeSimple(Mensaje, "::Advertencia::", "", "auto", "auto");
                    }
                },
                timeout: 50000,
                dataType: "text",
                async: true
            });
        }
    },

    ConsultaValorMaximo: function () {
        $.ajax({
            type: 'POST',
            url: Parametros.Link + 'DataProviders/Cotizador.aspx',
            data: {
                servicio: 'ConsultaValorMaximo',
                cLlave: Cotizador.Parametros.DataGuide,
                nIdNegocio: Cotizador.Parametros.nIdNegocio,
                ccAgente: Cotizador.Parametros.ccAgente,
                cTokenCor: ASHT.GetUrlParam("tokencor")[0],
                cAMIS: $('#CmbVersionMotoGen').val()

            },
            success: function (data) {
                jQuery.globalEval(data);
            },
            timeout: 50000,
            dataType: "text",
            async: true
        });
    },

    ValidaAdaptaciones: function () {
        var nSumaTotal = 0;
        var cAdapataciones = "";

        $("[name=cAdaptacionV]").each(function (index) {
            nSumaTotal += parseFloat($(this).val().replace(/\,/g, ''));
            cAdapataciones += $(this).val() + "-" + $("[name=cAdaptacionD][nLinea=" + $(this).attr("nLinea") + "]").val() + "|";
        });

        if (nSumaTotal == parseFloat(Cotizador.Parametros.nAdaptaciones.replace(/\,/g, ''))) {
            $.ajax({
                type: 'POST',
                url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                data: {
                    servicio: 'GuardarCampo',
                    cValor: cAdapataciones,
                    cCampo: "cAdaptaciones",
                    DataGuide: Cotizador.Parametros.DataGuide,
                    ccAgente: Cotizador.Parametros.ccAgente,
                    cTokenCor: ASHT.GetUrlParam("tokencor")[0]
                }, success: function (data) {
                    jQuery.globalEval(data);
                },
                timeout: 50000,
                dataType: "text",
                async: false
            });
            return false;
        } else {
            ASHT.MensajeSimple("La suma de adaptaciones no coincide con la cotizada, favor de revisar.", "::Advertencia::", "", "auto", "auto");
            return true;
        }
    },

    ValidaEquipoEspecial: function () {
        var nSumaTotal = 0;
        var cEquipoEspecial = "";

        $("[name=cEquipoV]").each(function (index) {
            nSumaTotal += parseFloat($(this).val().replace(/\,/g, ''));
            cEquipoEspecial += $(this).val() + "-" + $("[name=cEquipoD][nLinea=" + $(this).attr("nLinea") + "]").val() + "|";
        });

        if (nSumaTotal == parseFloat(Cotizador.Parametros.nEquipoEspecial.replace(/\,/g, ''))) {
            $.ajax({
                type: 'POST',
                url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                data: {
                    servicio: 'GuardarCampo',
                    cValor: cEquipoEspecial,
                    cCampo: "cEquipoEspecial",
                    DataGuide: Cotizador.Parametros.DataGuide,
                    ccAgente: Cotizador.Parametros.ccAgente,
                    cTokenCor: ASHT.GetUrlParam("tokencor")[0]
                }, success: function (data) {
                    jQuery.globalEval(data);
                },
                timeout: 50000,
                dataType: "text",
                async: false
            });
            return false;
        } else {
            ASHT.MensajeSimple("La suma del equipo especial no coincide con la cotizada, favor de revisar.", "::Advertencia::", "", "auto", "auto");
            return true;
        }
    },

    BtnEnviar: function (cImpresion) {
        var HTML = '';
        HTML += '<div class="ttSeccion f1b animate">Inserta los datos para mandar la cotización</div>';
        HTML += '<div class="f3 stack animate">';
        HTML += '   <div class="one">';
        HTML += '       <div class="boxSelectCotizador">';
        HTML += '           <label class="txtEtiqueta">* Nombre:</label>';
        HTML += '           <input class="inputTxtAjustable Requerido" type="text" id="nombre1">';
        HTML += '       </div>';
        HTML += '   </div>';
        HTML += '   <div class="two" id="DeEnviar">';
        HTML += '       <div class="boxSelectCotizador">';
        HTML += '           <label class="txtEtiqueta">* De:</label>';
        HTML += '           <input class="inputTxtAjustable Requerido" name="cCorreo" type="text" id="correo1">';
        HTML += '       </div>';
        HTML += '   </div>';
        HTML += '   <div class="three">';
        HTML += '       <div class="boxSelectCotizador">';
        HTML += '           <label class="txtEtiqueta">* Para:</label>';
        HTML += '           <input class="inputTxtAjustable Requerido" name="cCorreo" type="text" id="correo2">';
        HTML += '       </div>';
        HTML += '   </div><a id="LinkCorreo" href="" target="_blank" style="display:none"></a>';
        HTML += '</div>';

        $("<div id='FrmEnviar' >" + HTML + "</div>").dialog({
            title: "Registro Vehículo",
            width: "auto",
            modal: true,
            resizable: false,
            show: "blind",
            hide: "blind",
            open: function () {
                $(".ui-dialog-titlebar").hide();
                $.ajax({
                    type: 'POST',
                    url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                    data: {
                        servicio: 'ConsultaCorreo',
                        nIdNegocioGrupo: Cotizador.Parametros.nIdNegocioGrupo,
                        ccAgente: Cotizador.Parametros.ccAgente,
                        cTokenCor: ASHT.GetUrlParam("tokencor")[0]
                    }, success: function (data) {
                        jQuery.globalEval(data);
                    },
                    timeout: 50000,
                    dataType: "text",
                    async: false
                });
            },
            close: function () {
                $(this).remove();
            }, buttons: [{
                id: "BtnAceptar",
                text: "Aceptar",
                click: function () {
                    var _this = this;

                    if (!Cotizador.ValidaRequeridos("#FrmEnviar")) {
                        $("#LinkCorreo").attr("href", cImpresion + "&NombreCliente=" + $("#nombre1").val() + "&CorreoAgente=" + $("#correo1").val() + "&CorreoCliente=" + $("#correo2").val())[0].click();
                    }
                }
            }, {
                text: "Cancelar", click: function () {
                    $(this).dialog("close"); $(this).remove();
                }
            }]
        });
    },

    BtnDialogBuscar: function () {
        var HTML = '';
        HTML += '<div class="ttSeccion f1b animate">Escribe para buscar al cliente</div>';
        HTML += '<div class="f2 stack animate">';
        HTML += '   <div class="one">';
        HTML += '       <div class="boxSelectCotizador">';
        HTML += '           <label class="txtEtiqueta">* Cliente:</label>';
        HTML += '           <input name="TxtBuscarC" class="inputTxtAjustable Requerido" type="text" id="TxtBuscarC">';
        HTML += '       </div>';
        HTML += '   </div>';
        HTML += '   <div class="two"></div>';
        HTML += '   <div class="limpiar"></div>';
        HTML += '</div>';

        HTML += '<div id="DvClientes"></div>';

        HTML += '<div class="f1 animate">';
        HTML += '   <div class="centrar">';
        HTML += '       <input id="BtnBuscarCliente" class="btnCotizador" type="button" value="Buscar"><img src="../Images/ajax-loader.gif" style="display:none" id="ILoad" width="25px"/>';
        HTML += '       <input id="BtnElegir" class="btnCotizador" style="display:none" type="button" value="Elegir">';
        HTML += '       <input id="BtnCancelar" class="btnCotizador" type="button" value="Cancelar">';
        HTML += '   </div>';
        HTML += '</div>';

        $("<div id='FrmBuscar' >" + HTML + "</div>").dialog({
            title: "Registro Vehículo",
            width: "auto",
            modal: true,
            resizable: false,
            show: "blind",
            hide: "blind",
            open: function () {
                $(".ui-dialog-titlebar").hide();
                Cotizador.AgregarFuncionesEvento.BtnBuscarCliente();
                Cotizador.AgregarFuncionesEvento.BtnElegir(this);
                Cotizador.AgregarFuncionesEvento.BtnCancelar(this);
            },
            close: function () {
                $(this).remove();
            }
        });
    },

    BtnBuscarCliente: function () {
        $("#BtnElegir").hide();
        $("#DvClientes").empty();
        Cotizador.Parametros.arrClientes = [];        
        if (!Cotizador.ValidaRequeridos("#FrmBuscar")) {
            $("#ILoad").show();
            $.ajax({
                type: 'POST',
                url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                data: {
                    servicio: 'ConsultaCliente',
                    nIdNegocio: Cotizador.Parametros.nIdNegocio,
                    nLinea: 0,
                    cBuscar: $("#TxtBuscarC").val(),
                    ccAgente: Cotizador.Parametros.ccAgente,
                    cTokenCor: ASHT.GetUrlParam("tokencor")[0]
                },
                success: function (data) {
                    jQuery.globalEval(data);
                    $("#ILoad").hide();
                    if (Mensaje == "") {
                        if (Cotizador.Parametros.arrClientes.length > 0) {
                            $("#BtnElegir").show();
                            var HTML = '';
                            HTML += '<div class="f5 stack animate TitulosCliente">';
                            HTML += '   <div class="one">Nombre</div>';
                            HTML += '   <div class="two">Estado</div>';
                            HTML += '   <div class="three">Municipio</div>';
                            HTML += '   <div class="four">Colonia</div>';
                            HTML += '   <div class="five"></div>';
                            HTML += '   <div class="limpiar"></div>';
                            HTML += '</div>';
                            for (var i = 0; i <= Cotizador.Parametros.arrClientes.length - 1; i++) {
                                HTML += '<div class="f5 stack animate">';
                                var cNombre = Cotizador.Parametros.arrClientes[i].cNombre;
                                if (Cotizador.Parametros.arrClientes[i].nTipoPersona == 1) {
                                    cNombre += ' ' + Cotizador.Parametros.arrClientes[i].cPaterno + ' ' + Cotizador.Parametros.arrClientes[i].cMaterno;
                                }
                                HTML += '   <div class="one">';
                                HTML += '       <label class="TitulosVer">Nombre :</label><label for="Rd' + i + '" style="cursor:pointer">' + cNombre + '</label>';
                                HTML += '   </div>';
                                HTML += '   <div class="two">';
                                HTML += '       <label class="TitulosVer">Estado :</label><label for="Rd' + i + '" style="cursor:pointer">' + Cotizador.Parametros.arrClientes[i].cEstado2 + '</label>';
                                HTML += '   </div>';
                                HTML += '   <div class="three">';
                                HTML += '       <label class="TitulosVer">Municipio :</label><label for="Rd' + i + '" style="cursor:pointer">' + Cotizador.Parametros.arrClientes[i].cMunicipio2 + '</label>';
                                HTML += '   </div>';
                                HTML += '   <div class="four">';
                                HTML += '       <label class="TitulosVer">Colonia :</label><label for="Rd' + i + '" style="cursor:pointer">' + Cotizador.Parametros.arrClientes[i].cColonia + '</label>';
                                HTML += '   </div>';
                                HTML += '   <div class="five">';
                                HTML += '       <input type="radio" id="Rd' + i + '" value="' + i + '" name="Cliente" />';
                                HTML += '   </div>';
                                HTML += '   <div class="limpiar"></div>';
                                HTML += '</div>';
                            }
                            $("#DvClientes").html(HTML);

                            $('input[type=radio]').iCheck({
                                radioClass: 'iradio_square-red'
                            });
                        } else {
                            ASHT.MensajeSimple("No se encontro ningún cliente.", "::Advertencia::", "", "auto", "auto");
                        }
                    } else {
                        ASHT.MensajeSimple(Mensaje, "::Advertencia::", "", "auto", "auto");
                    }

                },
                timeout: 50000,
                dataType: "text",
                async: true
            });
        }
    },

    BtnElegir: function (_this) {
        var nElegido = parseInt($('input:radio[name=Cliente]:checked').val());

        $("#nTipoPersona").val(Cotizador.Parametros.arrClientes[nElegido].nTipoPersona).trigger("change");
        $("#cRFC").val(Cotizador.Parametros.arrClientes[nElegido].cRFC).trigger("focusout");

        $("#cCalle").val(Cotizador.Parametros.arrClientes[nElegido].cCalle).trigger("focusout");
        $("#cNoExt").val(Cotizador.Parametros.arrClientes[nElegido].cNoExt).trigger("focusout");
        $("#cNoInt").val(Cotizador.Parametros.arrClientes[nElegido].cNoInt).trigger("focusout");
        $("#cCodigo").val(Cotizador.Parametros.arrClientes[nElegido].cCP).trigger("change");

        $('#nColonia').find('option:contains("' + Cotizador.Parametros.arrClientes[nElegido].cColonia + '")').attr('selected', true).trigger("change");
        $("#cTelefono").val(Cotizador.Parametros.arrClientes[nElegido].cTelefono).trigger("focusout");
        $("#cCorreo").val(Cotizador.Parametros.arrClientes[nElegido].cEmail).trigger("focusout");

        if (Cotizador.Parametros.arrClientes[nElegido].nTipoPersona == 1) {
            $("#cNombre").val(Cotizador.Parametros.arrClientes[nElegido].cNombre).trigger("focusout");
            $("#cApaterno").val(Cotizador.Parametros.arrClientes[nElegido].cPaterno).trigger("focusout");
            $("#cAmaterno").val(Cotizador.Parametros.arrClientes[nElegido].cMaterno).trigger("focusout");
            $("#cNacionalidad").val(Cotizador.Parametros.arrClientes[nElegido].cNacionalidad).trigger("change");
            $("#cOcupacion").val(Cotizador.Parametros.arrClientes[nElegido].cOcupacion).trigger("change");
            $("#cPais").val(Cotizador.Parametros.arrClientes[nElegido].cPais).trigger("focusout");
            $("#cFiel").val(Cotizador.Parametros.arrClientes[nElegido].cFIEL).trigger("focusout").removeClass("Requerido");
            $("#cFechaTH").val(Cotizador.Parametros.arrClientes[nElegido].cFechaNac).trigger("focusout").removeClass("Requerido");
        } else {
            $("#cEmpresa").val(Cotizador.Parametros.arrClientes[nElegido].cNombre).trigger("focusout");
            $("#nGiro").val(Cotizador.Parametros.arrClientes[nElegido].cGiro).trigger("change");
            $("#cAdministrador").val(Cotizador.Parametros.arrClientes[nElegido].cAdministrador).trigger("focusout");
            $("#cNacionalidad2").val(Cotizador.Parametros.arrClientes[nElegido].cAdministradorNac).trigger("change");
            $("#cRepresentante").val(Cotizador.Parametros.arrClientes[nElegido].cRepresentante).trigger("focusout");
            $("#cNacionalidadRepres").val(Cotizador.Parametros.arrClientes[nElegido].cRepresentanteNac).trigger("change");
        }

        $(_this).dialog("close");
    },

    ConsultaSerie: function (cSerie) {
        if (cSerie == "") {
            $("#TxtSerieNivelada").addClass("ui-state-error ui-state-error-text").effect("pulsate");
        } else {
            $("#ILoad4").show();
            $("#BtnBuscarSerie").attr('disabled', true).addClass('ui-state-disabled');
            $.ajax({
                type: 'POST',
                url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                data: {
                    servicio: 'ConsultaSerieNivelada',
                    cSerie: cSerie,
                    cLlave: Cotizador.Parametros.DataGuide,
                    ccAgente: Cotizador.Parametros.ccAgente,
                    cTokenCor: ASHT.GetUrlParam("tokencor")[0]
                },
                success: function (data) {
                    jQuery.globalEval(data);
                    $("#ILoad4").hide();
                    $("#BtnBuscarSerie").attr('disabled', false).removeClass('ui-state-disabled');
                },
                timeout: 50000,
                dataType: "text",
                async: true
            });
        }
    },

    ValidaRequeridos: function (Formulario) {
        var Requeridos = false;

        $(Formulario).find(".Requerido").each(function (index) {
            var $this = $(this);
            switch ($this.prop("tagName")) {
                case "SELECT":
                    if ($this.is(":visible")) {
                        if (($this.val() == "0") || ($this.val() == "-- SELECCIONAR --")) {
                            Requeridos = true;
                            $this.addClass("ui-state-error ui-state-error-text").effect("pulsate");
                        } else {
                            $this.removeClass("ui-state-error ui-state-error-text");
                        }
                    } else {
                        $this.removeClass("ui-state-error ui-state-error-text");
                    }
                    break;
                case "INPUT":
                    switch ($this.attr("Name")) {
                        case "nTarjeta":
                            if ($this.is(":visible")) {
                                if (($this.val().length == 0) || ($this.attr("placeholder") == $this.val())) {
                                    Requeridos = true;
                                    $this.addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                } else {
                                    var DigTar = $(this).val().substring($(this).val().length - 4, $(this).val().length);
                                    var DigTar1 = $(this).val().substring($(this).val().length - 1, $(this).val().length);
                                    var re = new RegExp(DigTar1, 'g');
                                    if (DigTar.replace(re, '') == "") {
                                        Requeridos = true;
                                        $this.addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                        alert("Número de tarjeta/cuenta no es valido. Favor de revisar.");
                                    } else {
                                        if ($(this).val().length == $(this).attr("maxlength")) {
                                            $(this).removeClass("ui-state-error ui-state-error-text");
                                        } else {
                                            Requeridos = true;
                                            $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                        }
                                    }
                                }
                            }
                            break;
                        case "cNomTarjet":
                        case "cDireccionTH":
                            if ($this.is(":visible")) {
                                if (($this.val().length < 5) || ($this.attr("placeholder") == $this.val()) || $this.val().toUpperCase() == "CONOCIDO") {
                                    Requeridos = true;
                                    $this.addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                } else {
                                    $(this).removeClass("ui-state-error ui-state-error-text");
                                }
                            }
                            break;
                        case "cSerie":
                            if ($this.is(":visible")) {
                                if (($this.val().length == 0) || ($this.attr("placeholder") == $this.val())) {
                                    Requeridos = true;
                                    $this.addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                } else {
                                    if ($("#CmbModelo").val() > 1990) {
                                        if ($this.val().length < 17) {
                                            Requeridos = true;
                                            $this.addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                        } else {
                                            const pattern = new RegExp('^[A-Z]+$', 'i');
                                            var texto = $this.val();
                                            var bCaracteresSerieValidos = true;
                                            for (x = 0; x < texto.length; x++) {
                                                if (!pattern.test(texto.substring(x, x + 1))) {
                                                    if (texto.substring(x, x + 1) == " ") {
                                                        bCaracteresSerieValidos = false;
                                                    } else if (isNaN(texto.substring(x, x + 1))) {
                                                        if (!(texto.substring(x, x + 1) == "ñ" || texto.substring(x, x + 1) == "Ñ")) {
                                                            bCaracteresSerieValidos = false;
                                                        }
                                                    }
                                                }
                                            }
                                            if (bCaracteresSerieValidos) {
                                                $this.removeClass("ui-state-error ui-state-error-text ");
                                            } else {
                                                Requeridos = true;
                                                $this.addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                                alert("No se permiten caracteres especiales, ingrese unicamente letras y números.")
                                            }                                            
                                        }
                                    } else {
                                        if ($this.val().length < 6) {
                                            Requeridos = true;
                                            $this.addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                        } else {
                                            $(this).removeClass("ui-state-error ui-state-error-text");
                                        }
                                    }

                                    if ($this.val() === parseInt($this.val(), 17)) {
                                        Requeridos = true;
                                        $this.addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                    }
                                }
                            }
                            break;
                        case "cSeriePrecio":
                            if ($this.is(":visible")) {
                                if ($(this).val() !== "") {
                                    var bRespoSFL = false;
                                    $.ajax({
                                        type: 'POST',
                                        url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                                        data: {
                                            servicio: "ValidaSumaFL",
                                            nMonto: $(this).val().replace(/\,/g, '')
                                        },
                                        success: function (data) {
                                            jQuery.globalEval(data);
                                            bRespoSFL = bResStat;
                                        },
                                        timeout: 50000,
                                        dataType: "text",
                                        async: false
                                    });
                                    if (bRespoSFL) {
                                        $(this).removeClass("ui-state-error ui-state-error-text");
                                    } else {
                                        Requeridos = true;
                                        $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                    }
                                } else {
                                    Requeridos = true;
                                    $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                }
                            }
                            break;
                        case "cMotor":
                            if ($this.is(":visible")) {
                                if ($this.val().indexOf("HECHO") < 0) {
                                    if ($this.val().indexOf(" ") > -1) {
                                        Requeridos = true;
                                        $this.addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                    } else {
                                        $(this).removeClass("ui-state-error ui-state-error-text");
                                    }

                                    if ($this.val() == "11111111111111111" || $this.val() == "AAAAAAAAAAAAAA" || $this.val() == "123456789" || $this.val() == "ABCDEFGHI") {
                                        Requeridos = true;
                                        $this.addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                    }
                                } else {
                                    $(this).removeClass("ui-state-error ui-state-error-text");
                                }
                            }
                            break;
                        case "cCorreo":
                            if ($this.is(":visible")) {
                                if (document.domain == "server.anaseguros.com.mx" || document.domain == "anaseguros.com.mx" || document.domain == "desarrollo.anaseguros.com.mx" || document.domain == "localhost") {
                                    var aCorreoBL = ["notiene", "no.tiene", "no_tiene", "notengo", "no.tengo", "no_tengo", "sincorreo", "sin.correo", "sin_correo", "noconocido"];
                                    var bCorreoBL = false;
                                    
                                    for (var i = 0; i < aCorreoBL.length; i++) {
                                        if ($this.val().search(aCorreoBL[i]) != -1) {
                                            bCorreoBL = true;
                                        }
                                    }
                                    if (bCorreoBL || $this.val().split("@")[0] == "sin" || $this.val().split("@")[0].search("correo") != -1 || $this.val().split("@")[0].length <= 3 ) {
                                        Requeridos = true;
                                        $this.addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                    } else {
                                        if (ASHT.ValidaEspeciales.mail($(this).val())) {
                                            $(this).removeClass("ui-state-error ui-state-error-text");
                                        } else {
                                            Requeridos = true;
                                            $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                        }
                                    }
                                } else {
                                    if (ASHT.ValidaEspeciales.mail($(this).val())) {
                                        $(this).removeClass("ui-state-error ui-state-error-text");
                                    } else {
                                        Requeridos = true;
                                        $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                    }
                                }

                            }
                            break;
                        case "cCorreoDF":
                            if ($this.is(":visible")) {
                                if (ASHT.ValidaEspeciales.mail($(this).val())) {
                                    $(this).removeClass("ui-state-error ui-state-error-text");
                                } else {
                                    Requeridos = true;
                                    $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                }
                            }
                            break;
                        case "cRazonSocial":
                            let restringido = ["S.A. DE C.V.", "SA DE CV", "S.R.L. DE C.V.", "SRL DE CV"];
                            let separado = ["S.A.", "S.A", "SA", "C.V.", "C.V", "CV", "S.R.L.", "S.R.L", "SRL", "A.C.", "A.C", "AC", "A.C.", "S.C.", "S.C.", "S.C", "SC"];
                            var pasaRS = true;
                            if ($this.is(":visible")) {
                                if ($this.val().length == 0) {
                                    pasaRS = false;
                                } else {
                                    for (var i = 0; i < restringido.length; i++) {
                                        var index = $(this).val().search(restringido[i]);

                                        if (index >= 0) {
                                            pasaRS = false;
                                        }
                                    }

                                    var RazonSocialSep = $(this).val().split(' ');
                                    for (var i = 0; i < separado.length; i++) {
                                        for (var j = 0; j < RazonSocialSep.length; j++) {
                                            if (RazonSocialSep[j] == separado[i]) {
                                                pasaRS = false;
                                            }
                                        }
                                    }
                                }

                                if (pasaRS) {
                                    $(this).removeClass("ui-state-error ui-state-error-text");
                                } else {
                                    Requeridos = true;
                                    $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                    if ($this.val().length != 0) {
                                        alert("Razón Social: no debe incluir el régimen de capital, por ejemplo: 'A.N.A. COMPAÑÍA DE SEGUROS S.A. DE C.V.', sino solo 'A.N.A. COMPAÑÍA DE SEGUROS'");
                                    }
                                }
                            }
                            break;							
                        case "cRFC":
                            if ($this.is(":visible")) {
                                var bValidarRFC = true;
                                //[Ajuste Operaciones]
                                if ($(this).val().length == $(this).attr("maxlength")) {
                                    if ($("#nTipoPersona").val() == 1) {
                                        if ($(this).val() !== "") {
                                            if (ASHT.ValidaEspeciales.Rfc($(this).val())) {
                                                $(this).removeClass("ui-state-error ui-state-error-text");
                                            } else {
                                                Requeridos = true;
                                                $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                            }
                                        } else {
                                            Requeridos = true;
                                            $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                        }
                                    } else {
                                        if (ASHT.ValidaEspeciales.RfCMoral($(this).val())) {
                                            $(this).removeClass("ui-state-error ui-state-error-text");
                                        } else {
                                            Requeridos = true;
                                            $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                        }
                                    }
                                } else {
                                    Requeridos = true;
                                    $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                }

                                if (bValidarRFC) {
                                    $.ajax({
                                        type: 'POST',
                                        url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                                        data: {
                                            servicio: 'ValidaRFC',
                                            ccAgente: 'PASA',
                                            cTokenCor: ASHT.GetUrlParam("tokencor")[0],
                                            cRFC: $("[name=cRFC]").val(),
                                            nTipoPersona: $("#nTipoPersona").val()
                                        },
                                        success: function (data) {
                                            eval(data);
                                        },
                                        timeout: 50000,
                                        dataType: "text",
                                        async: false
                                    });
                                }
                            }
                            break;
                        case "cRFCCOR":
                            if ($this.is(":visible")) {
                                if ($(this).val() !== "") {
                                    if ($(this).attr("maxlength") == 10) {
                                        if (ASHT.ValidaEspeciales.Rfc10($(this).val())) {
                                            $(this).removeClass("ui-state-error ui-state-error-text");
                                        } else {
                                            Requeridos = true;
                                            $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                        }
                                    } else {
                                        if (ASHT.ValidaEspeciales.Rfc($(this).val())) {
                                            $(this).removeClass("ui-state-error ui-state-error-text");
                                        } else {
                                            Requeridos = true;
                                            $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                        }
                                    }
                                } else {
                                    $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                }
                            }
                            break;
                        case "cRFCDF":
                            if ($this.is(":visible")) {
                                var bValidarRFC = true;

                                if ($("#nTipoPersona").val() == 1) {
                                    if ($(this).val() !== "") {
                                        if (ASHT.ValidaEspeciales.Rfc($(this).val())) {
                                            $(this).removeClass("ui-state-error ui-state-error-text");
                                        } else {
                                            Requeridos = true;
                                            $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                        }
                                    } else {
                                        $(this).removeClass("ui-state-error ui-state-error-text");
                                    }
                                } else {
                                    if (ASHT.ValidaEspeciales.RfCMoral($(this).val())) {
                                        $(this).removeClass("ui-state-error ui-state-error-text");
                                    } else {
                                        Requeridos = true;
                                        $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                    }
                                }

                                if (bValidarRFC) {
                                    $.ajax({
                                        type: 'POST',
                                        url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                                        data: {
                                            servicio: 'ValidaRFC',
                                            ccAgente: 'PASA',
                                            cTokenCor: ASHT.GetUrlParam("tokencor")[0],
                                            cRFC: $("[name=cRFCDF]").val(),
                                            nTipoPersona: $("#nTipoPersona").val()
                                        },
                                        success: function (data) {
                                            eval(data);
                                        },
                                        timeout: 50000,
                                        dataType: "text",
                                        async: false
                                    });
                                }
                            }
                            break;
                        case "cCPDF":
                            if ($this.is(":visible")) {
                                if ($(this).val() !== "") {
                                    if ($(this).val().length == $(this).attr("maxlength")) {
                                        $(this).removeClass("ui-state-error ui-state-error-text");
                                    } else {
                                        Requeridos = true;
                                        $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                    }
                                } else {
                                    Requeridos = true;
                                    $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                }
                            }
                            break;							
                        case "cCURPCOR":
                            if ($this.is(":visible")) {
                                if (ASHT.ValidaEspeciales.curp($(this).val())) {
                                    $(this).removeClass("ui-state-error ui-state-error-text");
                                } else {
                                    Requeridos = true;
                                    $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                }
                            }
                            break;
                        case "cEmpleadoCOR":
                            if ($this.is(":visible")) {
                                if ($(this).val() !== "") {
                                    if ($(this).attr("nExigir") == 1) {
                                        if ($(this).val().length == $(this).attr("maxlength")) {
                                            $(this).removeClass("ui-state-error ui-state-error-text");
                                        } else {
                                            Requeridos = true;
                                            $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                        }
                                    } else {
                                        $(this).removeClass("ui-state-error ui-state-error-text");
                                    }
                                } else {
                                    Requeridos = true;
                                    $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                }
                            }
                            break;
                        case "cTelefono":
                            if ($this.is(":visible")) {
                                if ($(this).val() !== "") {
                                    var pasa = true;
                                    if ($(this).val().length == $(this).attr("maxlength")) {
                                        for (var i = 0; i < 10; i++) {
                                            var a = i.toString();
                                            var texto = a + a + a + a + a + a + a + a + a + a;

                                            if (texto == $(this).val()) {
                                                Requeridos = true;
                                                pasa = false;
                                                $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                            }
                                        }

                                        if (pasa) {
                                            var Encontrado = new Array(9);
                                            var cont = 0;

                                            for (var i = 0; i < 10; i++) {
                                                cont = 0;
                                                for (var j = 0; j < $(this).val().length; j++) {
                                                    if (i.toString() == $(this).val().substring(j, j + 1)) {
                                                        cont += 1;
                                                    }
                                                    Encontrado[i] = cont;
                                                }
                                            }

                                            var concidencia = 0;
                                            for (var i = 0; i < Encontrado.length; i++) {
                                                if (Encontrado[i] >= 7) {
                                                    Requeridos = true;
                                                    pasa = false;
                                                    $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                                }

                                                if (Encontrado[i] >= 5) {
                                                    concidencia += 1;
                                                }
                                            }

                                            if (concidencia == 2) {
                                                Requeridos = true;
                                                pasa = false;
                                                $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                            }
                                        }

                                        if (pasa) {
                                            for (var i = 1; i < 11; i++) {
                                                var Tel1 = '';
                                                var Tel2 = '';

                                                for (var j = i; j < i + 10; j++) {
                                                    var num = j;
                                                    if (j > 10) {
                                                        num = j - 10;
                                                    }
                                                    Tel1 += (num - 1).toString();
                                                    Tel2 = (num - 1).toString() + Tel2;
                                                }
                                                if ($(this).val() == Tel1) {
                                                    Requeridos = true;
                                                    pasa = false;
                                                    $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                                    i = 11;
                                                }
                                                if ($(this).val() == Tel2) {
                                                    Requeridos = true;
                                                    pasa = false;
                                                    $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                                    i = 11;
                                                }
                                            }
                                        }

                                        if (pasa) {
                                            $(this).removeClass("ui-state-error ui-state-error-text");
                                        }
                                    } else {
                                        Requeridos = true;
                                        $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                    }
                                } else {
                                    Requeridos = true;
                                    $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                }
                            }
                            break;
                        case "SumaFL":
                            if ($this.is(":visible")) {
                                if ($(this).val() !== "") {
                                    if ($(this).val() !== "0") {
                                        $(this).removeClass("ui-state-error ui-state-error-text");
                                    } else {
                                        Requeridos = true;
                                        $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                    }
                                } else {
                                    Requeridos = true;
                                    $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                }
                            }
                            break;
                        case "cCodSeg":
                            if ($this.is(":visible")) {
                                if ($(this).val() !== "") {
                                    if ($(this).val().length == $(this).attr("maxlength")) {
                                        $(this).removeClass("ui-state-error ui-state-error-text");
                                    } else {
                                        Requeridos = true;
                                        $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                    }
                                } else {
                                    Requeridos = true;
                                    $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                }
                            }
                            break;
                        case "cNombre":
                        case "cApaterno":
                        case "cAmaterno":
                            if ($this.is(":visible")) {
                                if ($(this).val() !== "") {
                                    switch ($(this).val().length) {
                                        case 1:
                                            Requeridos = true;
                                            $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                            break;
                                        case 2:
                                            var pos_a = $(this).val().charAt(0);
                                            var pos_b = $(this).val().charAt(1);

                                            if (pos_a != pos_b && pos_a != " " && pos_b != " ") {
                                                var Existe = false;
                                                let carEspecial = ["&", "-", "_", ".", "@"];
                                                for (var i = 0; i <= carEspecial.length - 1; i++) {
                                                    if (pos_a == carEspecial[i]) {
                                                        for (var x = 0; x <= carEspecial.length - 1; x++) {
                                                            if (pos_b == carEspecial[x]) {
                                                                Existe = true;
                                                            }
                                                        }
                                                    }
                                                }

                                                if (!Existe) {
                                                    $(this).removeClass("ui-state-error ui-state-error-text");
                                                    break;
                                                } else {
                                                    Requeridos = true;
                                                    $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                                }
                                            } else {
                                                Requeridos = true;
                                                $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                            }
                                            break;
                                        default:
                                            var texto = "";
                                            var p_char = $(this).val().charAt(0);
                                            for (var a = 0; a < $(this).val().length; a++) {
                                                texto += p_char;
                                            }

                                            if (texto == $(this).val()) {
                                                Requeridos = true;
                                                $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                            } else {
                                                $(this).removeClass("ui-state-error ui-state-error-text");
                                            }

                                            break;
                                    }                                    
                                } else {
                                    Requeridos = true;
                                    $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                }
                            }
                            break;
                        case "TxtBuscarC":
                            if ($this.is(":visible")) {
                                if ($(this).val() !== "") {
                                    if ($(this).val().trim().length >= 10) {
                                        $(this).removeClass("ui-state-error ui-state-error-text");
                                    } else {
                                        Requeridos = true;
                                        $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                        alert('Por favor, ingrese por lo menos 10 caracteres para realizar la búsqueda.');
                                    }
                                } else {
                                    Requeridos = true;
                                    $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                }
                            }
                            break;
                        case "cNacimiento":
                            if ($this.is(":visible")) {
                                if ($(this).val() !== "") {
                                    var n = $this.val().split('/');
                                    var f1 = new Date(n[1] + "/" + n[0] + "/" + n[2]);                                    
                                    f1.setFullYear(f1.getFullYear() + 18);

                                    var fecha = new Date();

                                    if (f1 < fecha) {
                                        var rfc = $("#cRFC").val();
                                        if (rfc !== "XAXX010101000" && rfc !== "") {
                                            var anio = false;
                                            var mes = false;
                                            var dia = false;
                                            var ArrErr = new Array();
                                            if (rfc.substring(4, 6) == n[2].substring(2)) {
                                                anio = true;
                                            } else {
                                                ArrErr.push("año");
                                            }
                                            if (rfc.substring(6, 8) == n[1]) {
                                                mes = true;
                                            } else {
                                                ArrErr.push("mes");
                                            }
                                            if (rfc.substring(8, 10) == n[0]) {
                                                dia = true;
                                            } else {
                                                ArrErr.push("día");
                                            }
                                            if (anio & mes & dia) {
                                                $(this).removeClass("ui-state-error ui-state-error-text");
                                                $("#DvErrorFN").html("");
                                                $("#DvErrorFN").hide();
                                            } else {
                                                $("#DvErrorFN").show();
                                                Requeridos = true;
                                                $("#DvErrorFN").html("El/Los siguiente(s) elemento(s) no coincide(n) <br> con el RFC proporcionado (" + rfc + "): <br> <ul> <li>" + ArrErr.join(' </li><li> ') + "</li></ul>");
                                                $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                            }
                                        } else {
                                            $(this).removeClass("ui-state-error ui-state-error-text");
                                            $("#DvErrorFN").html("");
                                            $("#DvErrorFN").hide();
                                        }
                                    } else {
                                        Requeridos = true;
                                        $("#DvErrorFN").html("Para contratar el seguro es necesario que sea <br> mayor de edad.");
                                        $("#DvErrorFN").show();
                                        $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                    }
                                } else {
                                    Requeridos = true;
                                    $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                }
                            }
                            break;
                        case "cFechaConstitucion":
                            if ($this.is(":visible")) {
                                if ($(this).val() !== "") {
                                    var n = $this.val().split('/');
                                    var f1 = new Date(n[1] + "/" + n[0] + "/" + n[2]);
                                    f1.setFullYear(f1.getFullYear() + 18);

                                    var fecha = new Date();
                                    var rfc = $("#cRFC").val();
                                    if (rfc !== "XAX010101000" && rfc !== "") {
                                        var anio = false;
                                        var mes = false;
                                        var dia = false;
                                        var ArrErr = new Array();
                                        if (rfc.substring(3, 5) == n[2].substring(2)) {
                                            anio = true;
                                        } else {
                                            ArrErr.push("año");
                                        }
                                        if (rfc.substring(5, 7) == n[1]) {
                                            mes = true;
                                        } else {
                                            ArrErr.push("mes");
                                        }
                                        if (rfc.substring(7, 9) == n[0]) {
                                            dia = true;
                                        } else {
                                            ArrErr.push("día");
                                        }
                                        if (anio & mes & dia) {
                                            $(this).removeClass("ui-state-error ui-state-error-text");
                                            $("#DvErrorFC").html("");
                                            $("#DvErrorFC").hide();
                                        } else {
                                            $("#DvErrorFC").show();
                                            Requeridos = true;
                                            $("#DvErrorFC").html("El/Los siguiente(s) elemento(s) no coincide(n) <br> con el RFC proporcionado (" + rfc + "): <br> <ul> <li>" + ArrErr.join(' </li><li> ') + "</li></ul>");
                                            $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                        }
                                    } else {
                                        $(this).removeClass("ui-state-error ui-state-error-text");
                                        $("#DvErrorFC").html("");
                                        $("#DvErrorFC").hide();
                                    }                                                                   
                                } else {
                                    Requeridos = true;
                                    $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                }
                            }
                            break;
                        case "SumaAseguradaVeh":
                            if ($this.is(":visible")) {
                                var num = $(this).val().replace(/\,/g, '');
                                if (!isNaN(num)) {
                                    num = num.toString().split('').reverse().join('').replace(/(?=\d*\,?)(\d{3})/g, '$1,');
                                    num = num.split('').reverse().join('').replace(/^[\,]/, '');
                                    $(this).val(num);
                                }

                                num = $(this).val().replace(/\,/g, '');

                                var nValorPivote = 0;
                                var nLimInf = 0;
                                var nLimSup = 0;
                                if ($(this).attr("tipoValor") == "VF") {
                                    nValorPivote = (Cotizador.Parametros.nValorVehiculo * (1 + (Cotizador.Parametros.nValorPivoteVF / 100))) * (1 - Cotizador.Parametros.nDepreciacionUso / 100);
                                    nLimInf = Math.round(nValorPivote * (1 + (Cotizador.Parametros.nlimInferiorVF / 100)) * 100) / 100;
                                    nLimSup = Math.round(nValorPivote * (1 + (Cotizador.Parametros.nlimSuperiorVF / 100)) * 100) / 100;
                                } else if ($(this).attr("tipoValor") == "VC") {
                                    nValorPivote = (Cotizador.Parametros.nValorVehiculo * (1 + (Cotizador.Parametros.nValorPivoteVC / 100))) * (1 - Cotizador.Parametros.nDepreciacionUso / 100);
                                    nLimInf = Math.round(nValorPivote * (1 + (Cotizador.Parametros.nlimInferiorVC / 100)) * 100) / 100;
                                    nLimSup = Math.round(nValorPivote * (1 + (Cotizador.Parametros.nlimSuperiorVC / 100)) * 100) / 100;
                                }

                                if (num >= nLimInf && num <= nLimSup) {                                    
                                    $(this).removeClass("ui-state-error ui-state-error-text");
                                } else {
                                    var limInf = (nLimInf).toString().split('').reverse().join('').replace(/(?=\d*\,?)(\d{3})/g, '$1,').split('').reverse().join('').replace(/^[\,]/, '')
                                    var limSup = (nLimSup).toString().split('').reverse().join('').replace(/(?=\d*\,?)(\d{3})/g, '$1,').split('').reverse().join('').replace(/^[\,]/, '')
                                    ASHT.MensajeSimple("Suma Asegurada fuera del rango permitido (" + limInf + " - " + limSup + ")", "::Advertencia::", "", "auto", "auto");
                                    Requeridos = true;
                                    $(this).addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                }
                            }
                            break;
                        case "cCalle":
                            if ($this.is(":visible")) {
                                if (($this.val().length == 0) || ($this.attr("placeholder") == $this.val())) {
                                    Requeridos = true;
                                    $this.addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                } else {
                                    if (document.domain == "server.anaseguros.com.mx" || document.domain == "anaseguros.com.mx" || document.domain == "desarrollo.anaseguros.com.mx") {
                                        if ($this.val().search("CONOCIDO") != -1 || $this.val().search("KONOCIDO") != -1 || $this.val().search("CONOSIDO") != -1 || $this.val().search("CONOCIDA") != -1 || $this.val().search("CONOSIDA") != -1) {
                                            Requeridos = true;
                                            $this.addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                        } else {
                                            $this.removeClass("ui-state-error ui-state-error-text ");
                                        }
                                    } else {
                                        $this.removeClass("ui-state-error ui-state-error-text ");
                                    }
                                }
                            } else {
                                $this.removeClass("ui-state-error ui-state-error-text ");
                            }
                            break;
                        default:
                            if (($this.attr("type") == "text") || ($this.attr("type") == "password")) {
                                if ($this.is(":visible")) {
                                    if (($this.val().length == 0) || ($this.attr("placeholder") == $this.val())) {
                                        Requeridos = true;
                                        $this.addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                    } else {
                                        if ($this.hasClass("ExtraRequerido")) {
                                            if ($this.val() == 0) {
                                                Requeridos = true;
                                                $this.addClass("ui-state-error ui-state-error-text").effect("pulsate");
                                            } else {
                                                $this.removeClass("ui-state-error ui-state-error-text");
                                            }

                                        } else {
                                            $this.removeClass("ui-state-error ui-state-error-text ");
                                        }
                                    }
                                } else {
                                    $this.removeClass("ui-state-error ui-state-error-text ");
                                }
                            }
                            break;
                    }
                    break;
                case "TEXTAREA":
                    if ($this.val().length == 0) {
                        Requeridos = true;
                        $this.addClass("ui-state-error ui-state-error-text").effect("pulsate");
                        $(".cleditorMain").find("iframe").hide();
                    } else {
                        $this.removeClass("ui-state-error ui-state-error-text");
                    }
                    break;
                case "TABLE":
                    if ($this.find("input:checked").length == 0) {
                        Requeridos = true;
                        $this.addClass("ui-state-error ui-state-error-text").effect("pulsate");
                    } else {
                        $this.removeClass("ui-state-error ui-state-error-text");
                    }
                    break;
                default:
                    jQuery.noop();
                    break;
            }

            if ($this.is(":visible")) {
                if ($this.attr("id") == "TxtModeloRC") {
                    if ($this.val().length < 4) {
                        Requeridos = true;
                        $this.addClass("ui-state-error ui-state-error-text").effect("pulsate");
                    } else {
                        if ($this.val() < 1950 || $this.val() > new Date().getFullYear() + 1) {
                            Requeridos = true;
                            $this.addClass("ui-state-error ui-state-error-text").effect("pulsate");
                        } else {
                            $(this).removeClass("ui-state-error ui-state-error-text");
                        }           
                    }
                }
            }
        });

        if ($("#TxtValorFactura").is(":visible")) {
            if ($("#TxtValorFactura").val() == "" || parseFloat($("#TxtValorFactura").val().replace(/\,/g, '')) > Cotizador.Parametros.nValorMaximoMoto || parseFloat($("#TxtValorFactura").val().replace(/\,/g, '')) < Cotizador.Parametros.nValorMinimoMoto) {
                $("#TxtValorFactura").addClass("ui-state-error ui-state-error-text").effect("pulsate");
                Requeridos = true;
            } else {
                $("#TxtValorFactura").removeClass("ui-state-error ui-state-error-text");
            }
        }

        if ($("#TxtValorFactura2").is(":visible")) {
            if ($("#TxtValorFactura2").val() == "" || parseFloat($("#TxtValorFactura2").val().replace(/\,/g, '')) > 1100000 || parseFloat($("#TxtValorFactura2").val().replace(/\,/g, '')) < Cotizador.Parametros.nLimInfUTP ) {
                $("#TxtValorFactura2").addClass("ui-state-error ui-state-error-text").effect("pulsate");                
                Requeridos = true;
                alert('Valor Convenido fuera de rango (' + Cotizador.Parametros.cLimInfUTP + ' - 1,100,000)');
            } else {
                $("#TxtValorFactura").removeClass("ui-state-error ui-state-error-text");
            }
        }

        if ($("#TxtValorFactura3").is(":visible")) {
            if ($("#TxtValorFactura3").val() == "" || parseFloat($("#TxtValorFactura3").val().replace(/\,/g, '')) > 3500000 || parseFloat($("#TxtValorFactura3").val().replace(/\,/g, '')) < Cotizador.Parametros.nLimInfUTP) {
                $("#TxtValorFactura3").addClass("ui-state-error ui-state-error-text").effect("pulsate");
                Requeridos = true;
                alert('Valor Convenido fuera de rango (' + Cotizador.Parametros.cLimInfUTP + ' - 3,500,000)');
            } else {
                $("#TxtValorFactura").removeClass("ui-state-error ui-state-error-text");
            }
        }

        if ($("#TxtValorFactura4").is(":visible")) {
            if ($("#TxtValorFactura4").val() == "" || parseFloat($("#TxtValorFactura4").val().replace(/\,/g, '')) > Cotizador.Parametros.nLimSupUTP || parseFloat($("#TxtValorFactura4").val().replace(/\,/g, '')) < Cotizador.Parametros.nLimInfUTP) {
                $("#TxtValorFactura4").addClass("ui-state-error ui-state-error-text").effect("pulsate");
                Requeridos = true;
                alert('Valor Convenido fuera de rango (' + Cotizador.Parametros.cLimInfUTP + ' - ' + Cotizador.Parametros.cLimSupUTP + ')');
            } else {
                $("#TxtValorFactura").removeClass("ui-state-error ui-state-error-text");
            }
        }

        if ($("#TxtValorFactura5").is(":visible")) {
            if ($("#TxtValorFactura4").val() == "" || parseFloat($("#TxtValorFactura4").val().replace(/\,/g, '')) > Cotizador.Parametros.nLimSupUTP || parseFloat($("#TxtValorFactura4").val().replace(/\,/g, '')) < Cotizador.Parametros.nLimInfUTP) {
                $("#TxtValorFactura4").addClass("ui-state-error ui-state-error-text").effect("pulsate");
                Requeridos = true;
                alert('Valor Convenido fuera de rango (' + Cotizador.Parametros.cLimInfUTP + ' - ' + Cotizador.Parametros.cLimSupUTP + ')');
            } else {
                $("#TxtValorFactura").removeClass("ui-state-error ui-state-error-text");
            }
        }

        return Requeridos
    },

    ValidaDisponibilidad: function () {
        $.ajax({
            type: 'POST',
            url: Parametros.Link + 'DataProviders/Cotizador.aspx',
            data: {
                servicio: "ComprobarDisponibilidad",
                nIdNegocio: Cotizador.Parametros.nIdNegocio,
                ccAgente: Cotizador.Parametros.ccAgente,
                cTokenCor: ASHT.GetUrlParam("tokencor")[0]
            },
            success: function (data) {
                jQuery.globalEval(data);

            },
            timeout: 50000,
            dataType: "text",
            async: true
        });
    },
    DvCSesionCor: function () {
        $("#BtnCerrarSesion").unbind("click").click(function () {
            var liga = window.location.href.replace("#!", "");
            if (liga.indexOf('tokentec') != -1) {
                window.location = window.location.href.split('?')[0] + "?" + $.param({ 'tokentec': ASHT.GetUrlParam("tokentec")[0] })
            } else {
                window.location = window.location.href.split('?')[0]
            }
        });
    },
    DvSuplCor: function (cLlaveGrupoNegocio) {
        $("#TxtUsuarioSup").autocomplete({
            minLength: 0,
            source: function (request, response) {
                $(this).addClass("ui-autocomplete-loading");
                $.ajax({
                    type: 'POST',
                    url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                    data: {
                        servicio: "ConsultaUsuarioSup",
                        cadena: request.term,
                        cTokenCor: ASHT.GetUrlParam("tokencor")[0],
                        cLlaveGrupoNegocio: cLlaveGrupoNegocio,
                        ccAgente: "ANSA"
                    },
                    success: function (data) {
                        jQuery.globalEval(data);
                        response(arrUsuarios);
                    },
                    timeout: 50000,
                    dataType: "text",
                    async: true
                });
            },
            select: function (event, ui) {
                $("#BtnSuplantar").attr("cUsuario", ui.item.cUsuario);
                $("#BtnSuplantar").attr("cNombre", ui.item.cNombre);
                $("#BtnSuplantar").attr("cAgente", ui.item.cAgente);
                $("#BtnSuplantar").attr("nIdElemento", ui.item.nIdElemento);
                $("#BtnSuplantar").attr("nIdUsuario", ui.item.nIdUsuario);
            },
            open: function () {
                $("ul.ui-autocomplete").removeClass("ui-corner-all").addClass("ui-corner-bottom").scrollTop(0);
                $(this).autocomplete('widget').css('z-index', 9999);
            },
            close: function () {
                $(this).removeClass("ui-autocomplete-loading");
            }
        });

        $("#BtnSuplantar").unbind("click").click(function () {
            if (typeof $("#BtnSuplantar").attr("cUsuario") != "undefined") {
                $.ajax({
                    type: 'POST',
                    url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                    data: {
                        servicio: "SuplantarCor",
                        cTokenCor: ASHT.GetUrlParam("tokencor")[0],
                        cUsuario: $("#BtnSuplantar").attr("cUsuario"),
                        cNombre: $("#BtnSuplantar").attr("cNombre"),
                        cAgente: $("#BtnSuplantar").attr("cAgente"),
                        nIdElemento: $("#BtnSuplantar").attr("nIdElemento"),
                        nIdUsuario: $("#BtnSuplantar").attr("nIdUsuario"),
                        ccAgente: "ANSA"
                    },
                    success: function (data) {
                        jQuery.globalEval(data);
                        if (cTokenCor != "") {
                            var liga = window.location.href.replace("#!", "");
                            if (liga.indexOf('tokentec') != -1) {
                                window.location.href = window.location.pathname + "?" + $.param({ 'tokentec': ASHT.GetUrlParam("tokentec")[0] }) +  "&"  + $.param({ 'tokencor': cTokenCor });
                            } else {
                                window.location.href = window.location.pathname + "?" + $.param({ 'tokencor': cTokenCor });
                            }
                        }
                    },
                    timeout: 50000,
                    dataType: "text",
                    async: true
                });
            } else {
                alert("No se ha elegido a un usuario de la lista de busqueda, favor de seleccionarlo e intentar de nuevo");
            }
        });

        $("#BtnCancelarSup").unbind("click").click(function () {
            $.ajax({
                type: 'POST',
                url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                data: {
                    servicio: "CancelarSup",
                    cTokenCor: ASHT.GetUrlParam("tokencor")[0],
                    ccAgente: "ANSA"
                },
                success: function (data) {
                    jQuery.globalEval(data);

                    if (cTokenCor != "") {
                        window.location.href = window.location.pathname + "?" + $.param({ 'tokencor': cTokenCor });
                    }
                },
                timeout: 50000,
                dataType: "text",
                async: true
            });
        });

        $(".ttCerrar").unbind("click").click(function () {
            $(".bodyLogin").hide('slide', { direction: 'right' }, 500);
        });

        $("#SupCor").unbind("click").click(function () {
            if ($(".bodyLogin").is(":visible")) {
                $(".bodyLogin").hide('slide', { direction: 'right' }, 500);
            } else {
                if (!Cotizador.Parametros.bMenuSup) {
                    $(".bodyLogin").position({ my: "right top", at: "right bottom", of: "#SupCor" });
                    Cotizador.Parametros.bMenuSup = true;
                }
                $(".bodyLogin").show('slide', { direction: 'right' }, 500);
            }
        });

        //$("#BtnCerrarSesion").unbind("click").click(function () {
        //    var liga = window.location.href.replace("#!", "");
        //    if (liga.indexOf('tokentec') != -1) {
        //        window.location = window.location.href.split('?')[0] + "?" + $.param({ 'tokentec': ASHT.GetUrlParam("tokentec")[0] })
        //    } else {
        //        window.location = window.location.href.split('?')[0] 
        //    }            
        //});
    },

    LLenarCombos: function (cmb) {
        $.ajax({
            type: 'POST',
            url: Parametros.Link + 'DataProviders/Cotizador.aspx',
            data: {
                servicio: 'LlenarCombos',
                Combo: cmb,
                DataGuide: Cotizador.Parametros.DataGuide,
                nIdNegocioGrupo: Cotizador.Parametros.nIdNegocioGrupo,
                nIdNegocio: Cotizador.Parametros.nIdNegocio,
                nTipoNegocio: Cotizador.Parametros.nTipoCotizador,
                ccAgente: Cotizador.Parametros.ccAgente,
                cAgrupador: Cotizador.Parametros.cAgrupador,
                cLog: ASHT.GetUrlParam("token")[0],
                cLogCor: ASHT.GetUrlParam("tokencor")[0],
                cTokenCor: ASHT.GetUrlParam("tokencor")[0],
                nTipoPersona: $("#nTipoPersona").val(),
                bRenovacion: Cotizador.Parametros.bRenovacion
            },
            success: function (data) {
                try {
                    jQuery.globalEval(data);
                    var opciones = "";
                    for (var i = 0; i <= arrValores.length - 1; i++) {
                        opciones += "<option value='" + arrValores[i].nValor + "' >" + arrValores[i].cValor + "</option>";
                    }

                    $(cmb).html(opciones);
                    console.log($(cmb).find("option").length);
                    if ($(cmb).length > 1) {
                        $(cmb).each(function () {
                            var $this = $(this);
                            if ($this.find("option").length == 2) {
                                var unicoValor = false;
                                console.log(cmb);
                                $this.find("option").each(function () {
                                    console.log(unicoValor + "-" + $(this).val() + "-" + $(this).html());
                                    if (!unicoValor) {
                                        if ($(this).val() == 0 && $(this).html() == "--SELECCIONAR--") {
                                            unicoValor = true;
                                        }
                                    } else {
                                        console.log("$(" + $this.attr("id") + ").val(" + $(this).val() + ").trigger('change')");
                                        $this.val($(this).val()).trigger("change");
                                    }
                                });
                            }
                        });
                    } else {
                        if ($(cmb).find("option").length == 2) {
                            var unicoValor = false;
                            console.log(cmb);
                            $(cmb).find("option").each(function () {
                                console.log(unicoValor + "-" + $(this).val() + "-" + $(this).html());
                                if (!unicoValor) {
                                    if ($(this).val() == 0 && $(this).html() == "--SELECCIONAR--") {
                                        unicoValor = true;
                                    }
                                } else {
                                    console.log("$(" + cmb + ").val(" + $(this).val()+ ").trigger('change')");
                                    $(cmb).val($(this).val()).trigger("change");
                                }
                            });
                        }
                    }

                    if (cmb == "#CmbServicio") {
                        if (arrValores.length == 2) {
                            $(cmb).val(arrValores[1].nValor).trigger("change");
                            $("[name=DvServicio]").hide();
                        } else {
                            $("[name=DvServicio]").show();
                        }
                    }

                    if (cmb == "#CmbUso") {
                        if (arrValores.length == 2) {
                            $(cmb).val(arrValores[1].nValor).trigger("change");
                            $("[name=DvUso]").hide();
                        } else {
                            if (Cotizador.Parametros.nTipoCotizador == 11) {
                                $("[name=DvUso]").show();
                            } else {
                                if ($("#CmbTipoVehiculo").val() > 200 && $("#CmbTipoVehiculo").val() < 240) {
                                    $("[name=DvUso]").hide();
                                } else {
                                    $("[name=DvUso]").show();
                                }
                            }
                        }
                    }

                    if (ASHT.GetUrlParam("tokencor")[0] != "") {
                        if (cmb == "[name=cVigencia]") {
                            $.ajax({
                                type: 'POST',
                                url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                                data: {
                                    servicio: "ConsultaVigenciaCor",
                                    nIdNegocio: Cotizador.Parametros.nIdNegocio,
                                    cLogCor: ASHT.GetUrlParam("tokencor")[0],
                                    Combo: cmb,
                                    ccAgente: "ASNA"
                                },
                                success: function (data) {
                                    jQuery.globalEval(data);

                                },
                                timeout: 50000,
                                dataType: "text",
                                async: true
                            });
                        }

                        if (cmb == "[name=cMetodoPago]" || cmb == "#CmbMetodoPago3") {
                            $.ajax({
                                type: 'POST',
                                url: Parametros.Link + 'DataProviders/Cotizador.aspx',
                                data: {
                                    servicio: "ConsultaFormasPagoCor",
                                    nIdNegocio: Cotizador.Parametros.nIdNegocio,
                                    cLogCor: ASHT.GetUrlParam("tokencor")[0],
                                    nIdVigencia: $("#CmbVigencia").val(),
                                    Combo: cmb,
                                    ccAgente: "ASNA"
                                },
                                success: function (data) {
                                    jQuery.globalEval(data);

                                },
                                timeout: 50000,
                                dataType: "text",
                                async: true
                            });
                        }
                    }
                    if (cmb == "[name=cVigencia]" && Cotizador.Parametros.nIdNegocioGrupo == 2) {
                        $("#CmbVigencia").val("1").trigger("change");
                        $("#CmbMetodoPago").val("C").trigger("change");
                        $("#ChkMultiFormaPago").iCheck("check");
                        $("[name=DvVigencia]").hide();
                        $("[name=MultiFormaPago]").hide();
                        $("#CmbVigenciaPlan2").attr('disabled', true).addClass('ui-state-disabled');
                    }
                }
                catch (e) {
                    console.log(e.message);
                }
            },
            timeout: 50000,
            dataType: "text",
            async: false
        });
    },
	
	CampoAdicional: function () {

        $.ajax({
            type: 'POST',
            url: Parametros.Link + 'DataProviders/Cotizador.aspx',
            data: {
                servicio: 'CampoAdicional',
                nIdNegocio: Cotizador.Parametros.nIdNegocio
            },
            success: function (data) {
                try {
                    jQuery.globalEval(data);
                }
                catch (e) {
                    console.log(e.message);
                }

            },
            timeout: 0,
            dataType: "text",
            async: false
        });

    }
}