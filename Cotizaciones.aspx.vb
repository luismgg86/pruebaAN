
Partial Class Pages_Cotizaciones
    Inherits System.Web.UI.Page

    Private Sub Pages_Cotizaciones_Load(sender As Object, e As EventArgs) Handles Me.Load
        Dim Scripts As String = ""

        Dim Random1 As New Random()
        Dim Random As Integer = 0
        Dim Debuguear As Boolean = True

        If Not Debuguear Then
            Randomize()
            Random = Random1.Next(1, 10000)
        End If
        Scripts &= "<meta name='viewport' content='width=device-width, initial-scale=1'>"
        Scripts &= "<meta name='apple-mobile-web-app-capable' content='yes'>"
        Scripts &= "<link href='../Styles/ANA/jquery-ui-1.10.4.custom.css' rel='stylesheet' type='text/css' />"
        Scripts &= "<link href='../Styles/ANA/ANAnet_tablas.css' rel='stylesheet' type='text/css' />"
        Scripts &= "<link href='../Styles/Renovacion/Renovacion.css' rel='stylesheet' type='text/css'>"
        Scripts &= "<link href='../Styles/Renovacion/ananetstyles.css' rel='stylesheet' type='text/css'>"
        Scripts &= "<link href='../Styles/Responsivo/fonts.css' rel='stylesheet' type='text/css'>"
        ' Scripts &= "<link href='http://leonora.mx/ana_net/css/stylesvenseg.css' rel='stylesheet' type='text/css'>"
        Scripts &= "<link href='../Styles/Switch/styles.css' rel='stylesheet' />"
        Scripts &= "<link href='../Styles/Renovacion/font-awesome.min.css' rel='stylesheet' type='text/css' />"
        Scripts &= "<link href='../Styles/Responsivo/nav-right.css' rel='stylesheet' type='text/css' media='all'/>"
        Scripts &= "<link href='../Styles/Responsivo/Default.css' rel='stylesheet' type='text/css' media='all'/>"
        Scripts &= "<link href='../Styles/Responsivo/fixed-1024.css' type='text/css' rel='stylesheet' media='only screen And (min-width: 1024px) And (max-width: 90000px)'/>"
        Scripts &= "<link href='../Styles/Responsivo/fixed-768.css' type='text/css' rel='stylesheet' media='only screen And (min-width: 768px) And (max-width: 1023px)'/>"
        Scripts &= "<link href='../Styles/Responsivo/fixed-480.css' type='text/css' rel='stylesheet' media='only screen And (min-width: 480px) And (max-width: 767px)'/>"
        Scripts &= "<link href='../Styles/Responsivo/fixed-320.css' type='text/css' rel='stylesheet' media='only screen And (min-width: 0px) And (max-width: 479px)'/>"
        Scripts &= "<link href='../Styles/Responsivo/percent.css' type='text/css' rel='stylesheet' media='only screen And (min-width: 0px) And (max-width: 90000px)'/>"
        Scripts &= "<link href='../Styles/Responsivo/Stack.css' type='text/css' rel='stylesheet' media='only screen And (min-width: 0px) And (max-width: 478px)'/>"
        Scripts &= "<link href='../Styles/ToolTipster/tooltipster.css' rel='stylesheet'/>"
        Scripts &= "<link href='../Styles/ToolTipster/themes/tooltipster-shadow.css' rel='stylesheet'/>"
        Scripts &= "<link href='../Scripts/iCheck/skins/all.css' rel='stylesheet' />"
        Scripts &= "<link href='../Styles/Calendario/Calendario.css' rel='stylesheet'/>"
        Scripts &= "<script src='../Scripts/jQuery/jquery-1.10.2.js?" & Random & "' type='text/javascript'></script>"
        Scripts &= "<script src='../Scripts/jQuery/jquery-ui-1.10.4.custom.js?" & Random & "' type='text/javascript'></script>"
        Scripts &= "<script src='../Scripts/ASHT/jQuery.ASHT_CORE.js?" & Random & "' type='text/javascript'></script>"
        Scripts &= "<script src='../Scripts/ToolTipster/jquery.tooltipster.js?" & Random & "' type='text/javascript'></script>"
        Scripts &= "<script src='../Scripts/iCheck/jquery.icheck.js?" & Random & "' type='text/javascript'></script>"
        Scripts &= "<script src='../Scripts/jquery.adaptive-switch.js?" & Random & "' type='text/javascript'></script>"
        Scripts &= "<script src='../ScriptsM/Menu.js?" & Random & "' type='text/javascript'></script>"
        Scripts &= "<script src='../ScriptsM/Parametros.js?" & Random & "' type='text/javascript'></script>"
        Scripts &= "<script src='../Scripts/Cotizaciones.js?" & Random & "' type='text/javascript'></script>"

        HeadCotizaciones.InnerHtml = Scripts
    End Sub
End Class
