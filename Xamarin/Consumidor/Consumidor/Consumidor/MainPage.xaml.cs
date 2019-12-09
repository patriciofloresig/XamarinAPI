using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace Consumidor
{
    // Learn more about making custom code visible in the Xamarin.Forms previewer
    // by visiting https://aka.ms/xamarinforms-previewer
    [DesignTimeVisible(false)]
    public partial class MainPage : ContentPage
    {
        public static List<Alumno> eventos = new List<Alumno>();
        public MainPage()
        {
            InitializeComponent();
        }

        private async void Button_Clicked(object sender, EventArgs e)
        {
            lvEventos.IsRefreshing = true;
            eventos = await WSAlumno.GetCuentas();
            lvEventos.ItemsSource = null;
            lvEventos.ItemsSource = eventos;
            lvEventos.IsRefreshing = false;
        }
    }
}
