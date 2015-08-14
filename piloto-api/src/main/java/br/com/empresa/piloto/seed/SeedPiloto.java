/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.empresa.piloto.seed;

import br.com.empresa.piloto.application.service.ClienteService;
import br.com.empresa.piloto.application.service.EntregaService;
import br.com.empresa.piloto.application.service.FuncionarioService;
import br.com.empresa.piloto.application.service.HorarioTrabalhoService;
import br.com.empresa.piloto.application.service.ItemPedidoProdutoService;
import br.com.empresa.piloto.application.service.ItemPedidoServicoService;
import br.com.empresa.piloto.application.service.MarcaService;
import br.com.empresa.piloto.application.service.PedidoService;
import br.com.empresa.piloto.application.service.ProdutoService;
import br.com.empresa.piloto.application.service.ServicoService;
import br.com.empresa.piloto.domain.model.Cliente;
import br.com.empresa.piloto.domain.model.DiaDaSemana;
import br.com.empresa.piloto.domain.model.Entrega;
import br.com.empresa.piloto.domain.model.Funcionario;
import br.com.empresa.piloto.domain.model.HorarioTrabalho;
import br.com.empresa.piloto.domain.model.ItemPedidoProduto;
import br.com.empresa.piloto.domain.model.ItemPedidoServico;
import br.com.empresa.piloto.domain.model.Marca;
import br.com.empresa.piloto.domain.model.Pedido;
import br.com.empresa.piloto.domain.model.Produto;
import br.com.empresa.piloto.domain.model.Servico;
import gumga.framework.core.QueryObject;
import gumga.framework.core.SearchResult;
import gumga.framework.domain.domains.GumgaAddress;
import gumga.framework.domain.domains.GumgaBoolean;
import gumga.framework.domain.domains.GumgaCNPJ;
import gumga.framework.domain.domains.GumgaCPF;
import gumga.framework.domain.domains.GumgaEMail;
import gumga.framework.domain.domains.GumgaGeoLocation;
import gumga.framework.domain.domains.GumgaIP4;
import gumga.framework.domain.domains.GumgaIP6;
import gumga.framework.domain.domains.GumgaMoney;
import gumga.framework.domain.domains.GumgaPhoneNumber;
import gumga.framework.domain.domains.GumgaTime;
import gumga.framework.domain.domains.GumgaURL;
import gumga.framework.domain.seed.AppSeed;
import java.io.IOException;
import java.lang.reflect.Array;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author mateus
 */
@Component
public class SeedPiloto implements AppSeed {

    @Autowired
    private MarcaService marcaService;
    @Autowired
    private ProdutoService produtoService;
    @Autowired
    private ClienteService clienteService;
    @Autowired
    private FuncionarioService funcionarioService;
    @Autowired
    private PedidoService pedidoService;
    @Autowired
    private HorarioTrabalhoService horarioTrabalhoService;
    @Autowired
    private ServicoService servicoService;
    @Autowired
    private EntregaService entregaService;
    @Autowired
    private ItemPedidoProdutoService itemPedidoProdutoService;
    @Autowired
    private ItemPedidoServicoService itemPedidoServicoService;

    @Override
    @Transactional
    public void loadSeed() throws IOException {
        if (estaVazio()) {
            System.out.println("PILOTO SEM DADOS - RODANDO SEED");
            Marca marca;
            Produto produto;
            Cliente cliente;
            HorarioTrabalho horarioTrabalho;
            Servico servico;
            Funcionario funcionario;
            Set<HorarioTrabalho> horarios = new HashSet<>();
            Pedido pedido;
            ItemPedidoProduto itemPedidoProduto;
            ItemPedidoServico itemPedidoServico;
            List<ItemPedidoProduto> itemPedidoProdutos = new ArrayList<>();
            List<ItemPedidoServico> itemPedidoServicos = new ArrayList<>();
            Entrega entrega;

            System.out.println("Inserindo marca LG");
            marca = new Marca();
            marca.setNome("LG");
            marca.setLocation(new GumgaGeoLocation(40, 150));
            marcaService.save(marca);
            produto = new Produto();
            produto.setNome("Smart TV");
            produto.setQuantidade(12);
            produto.setValor(new GumgaMoney(new BigDecimal(1700)));
            produto.setMarca(marca);
            produtoService.save(produto);
            entrega = new Entrega();
            entrega.setQuantidade(2);
            entrega.setQuando(new Date());
            entrega.setEndereco(new GumgaAddress("87707110", "Rua", "Ebano pereira", "160", "Casa", "Nossa sr de fatima", "Paranavaí", "Paraná", "Brasil"));
            entregaService.save(entrega);
            itemPedidoProduto = new ItemPedidoProduto();
            itemPedidoProduto.setProduto(produto);
            itemPedidoProduto.setQuantidade(2);
            itemPedidoProduto.setValor(new GumgaMoney(new BigDecimal(3400)));
            itemPedidoProduto.setEntregas(new ArrayList<>());
            itemPedidoProduto.getEntregas().add(entrega);
            itemPedidoProdutoService.save(itemPedidoProduto);
            itemPedidoProdutos.add(itemPedidoProduto);
            

            produto = new Produto();
            produto.setNome("Smartphone G2");
            produto.setQuantidade(30);
            produto.setValor(new GumgaMoney(new BigDecimal(439.12)));
            produto.setMarca(marca);
            produtoService.save(produto);         

            System.out.println("Inserindo marca Motorola");
            marca = new Marca();
            marca.setNome("Motorola");
            marca.setLocation(new GumgaGeoLocation(60, 140));
            marcaService.save(marca);
            produto = new Produto();
            produto.setNome("Moto x");
            produto.setQuantidade(15);
            produto.setValor(new GumgaMoney(new BigDecimal(1534)));
            produto.setMarca(marca);
            produtoService.save(produto);
            produto = new Produto();
            produto.setNome("Moto g");
            produto.setQuantidade(10);
            produto.setValor(new GumgaMoney(new BigDecimal(799.00)));
            produto.setMarca(marca);
            produtoService.save(produto);

            System.out.println("Inserindo marca Sony");
            marca = new Marca();
            marca.setNome("Sony");
            marca.setLocation(new GumgaGeoLocation(-40, 110));
            marca = marcaService.save(marca);
            produto = new Produto();
            produto.setNome("Notebook");
            produto.setQuantidade(5);
            produto.setValor(new GumgaMoney(new BigDecimal(2300)));
            produto.setMarca(marca);
            produtoService.save(produto);
            produto = new Produto();
            produto.setNome("Xperia");
            produto.setQuantidade(20);
            produto.setValor(new GumgaMoney(new BigDecimal(1600)));
            produto.setMarca(marca);
            produtoService.save(produto);
            produto = new Produto();
            produto.setNome("Playstation 3");
            produto.setQuantidade(2);
            produto.setValor(new GumgaMoney(new BigDecimal(1000)));
            produto.setMarca(marca);
            produtoService.save(produto);

            System.out.println("Inserindo marca CCE");
            marca = new Marca();
            marca.setNome("CCE");
            marca.setLocation(new GumgaGeoLocation(-60, 110));
            marca = marcaService.save(marca);
            produto = new Produto();
            produto.setNome("Notebook UltraThin");
            produto.setQuantidade(15);
            produto.setValor(new GumgaMoney(new BigDecimal(1400)));
            produto.setMarca(marca);
            produtoService.save(produto);

            System.out.println("Inserindo clientes");
            cliente = new Cliente();
            cliente.setNome("Mateus Miranda de almeida");
            cliente.setEmail(new GumgaEMail("info.mateusmiranda@gmail.com"));
            cliente.setEndereco(new GumgaAddress("87711350", "Rua", "Jose de mattos filho", "193", "Casa", "São jorge", "Paranavaí", "Paraná", "Brasil"));
            cliente.setAtivo(new GumgaBoolean(true));
            cliente.setCnpj(new GumgaCNPJ("1656565645"));
            cliente.setTelefone(new GumgaPhoneNumber("4497050785"));
            cliente.setUrl(new GumgaURL("http://www.magusweb.com.br"));
            clienteService.save(cliente);
            cliente = new Cliente();
            cliente.setNome("Augusto carniel");
            cliente.setEmail(new GumgaEMail("augustocarniel@outlook.com"));
            cliente.setEndereco(new GumgaAddress("87705080", "Rua", "Aucides ferreira", "110", "Ap", "Santa eugenia", "Paranavaí", "Paraná", "Brasil"));
            cliente.setAtivo(new GumgaBoolean(true));
            cliente.setCnpj(new GumgaCNPJ("055654654654"));
            cliente.setTelefone(new GumgaPhoneNumber("4491194012"));
            cliente.setUrl(new GumgaURL("http://www.magusweb.com.br"));
            clienteService.save(cliente);
            cliente = new Cliente();
            cliente.setNome("Munif gebara");
            cliente.setEmail(new GumgaEMail("munif@gumga.com.br"));
            cliente.setEndereco(new GumgaAddress("87707110", "Rua", "Ebano pereira", "160", "Casa", "Nossa sr de fatima", "Paranavaí", "Paraná", "Brasil"));
            cliente.setAtivo(new GumgaBoolean(true));
            cliente.setCnpj(new GumgaCNPJ("5498419848941"));
            cliente.setTelefone(new GumgaPhoneNumber("4498526532"));
            cliente.setUrl(new GumgaURL("http://www.gumga.com.br"));
            clienteService.save(cliente);

            horarioTrabalho = new HorarioTrabalho();
            horarioTrabalho.setDia(DiaDaSemana.SEGUNDA);
            horarioTrabalho.setHorarioInicial(new GumgaTime(8, 00));
            horarioTrabalho.setHorarioFinal(new GumgaTime(18, 00));
            horarioTrabalho.setIp4(new GumgaIP4("192.168.25.202"));
            horarioTrabalho.setIp6(new GumgaIP6("2001:DB8:0:54:0:0:0:0"));
            horarioTrabalhoService.save(horarioTrabalho);
            horarios.add(horarioTrabalho);
            horarioTrabalho = new HorarioTrabalho();
            horarioTrabalho.setDia(DiaDaSemana.TERÇA);
            horarioTrabalho.setHorarioInicial(new GumgaTime(8, 00));
            horarioTrabalho.setHorarioFinal(new GumgaTime(18, 00));
            horarioTrabalho.setIp4(new GumgaIP4("192.168.25.202"));
            horarioTrabalho.setIp6(new GumgaIP6("2001:DB8:0:54:0:0:0:0"));
            horarioTrabalhoService.save(horarioTrabalho);
            horarios.add(horarioTrabalho);
            horarioTrabalho = new HorarioTrabalho();
            horarioTrabalho.setDia(DiaDaSemana.QUARTA);
            horarioTrabalho.setHorarioInicial(new GumgaTime(8, 00));
            horarioTrabalho.setHorarioFinal(new GumgaTime(18, 00));
            horarioTrabalho.setIp4(new GumgaIP4("192.168.25.202"));
            horarioTrabalho.setIp6(new GumgaIP6("2001:DB8:0:54:0:0:0:0"));
            horarioTrabalhoService.save(horarioTrabalho);
            horarios.add(horarioTrabalho);
            horarioTrabalho = new HorarioTrabalho();
            horarioTrabalho.setDia(DiaDaSemana.QUINTA);
            horarioTrabalho.setHorarioInicial(new GumgaTime(8, 00));
            horarioTrabalho.setHorarioFinal(new GumgaTime(18, 00));
            horarioTrabalho.setIp4(new GumgaIP4("192.168.25.202"));
            horarioTrabalho.setIp6(new GumgaIP6("2001:DB8:0:54:0:0:0:0"));
            horarioTrabalhoService.save(horarioTrabalho);
            horarios.add(horarioTrabalho);
            horarioTrabalho = new HorarioTrabalho();
            horarioTrabalho.setDia(DiaDaSemana.SEXTA);
            horarioTrabalho.setHorarioInicial(new GumgaTime(8, 00));
            horarioTrabalho.setHorarioFinal(new GumgaTime(18, 00));
            horarioTrabalho.setIp4(new GumgaIP4("192.168.25.202"));
            horarioTrabalho.setIp6(new GumgaIP6("2001:DB8:0:54:0:0:0:0"));
            horarioTrabalhoService.save(horarioTrabalho);
            horarios.add(horarioTrabalho);
            horarioTrabalho = new HorarioTrabalho();
            horarioTrabalho.setDia(DiaDaSemana.SABADO);
            horarioTrabalho.setHorarioInicial(new GumgaTime(8, 00));
            horarioTrabalho.setHorarioFinal(new GumgaTime(12, 00));
            horarioTrabalho.setIp4(new GumgaIP4("192.168.25.202"));
            horarioTrabalho.setIp6(new GumgaIP6("2001:DB8:0:54:0:0:0:0"));
            horarioTrabalhoService.save(horarioTrabalho);
            horarios.add(horarioTrabalho);

            System.out.println("Inserindo funcionarios");
            funcionario = new Funcionario();
            funcionario.setNome("Rafael mangolin");
            funcionario.setTelefone(new GumgaPhoneNumber("546464654"));
            funcionario.setHorarios(horarios);
            funcionario.setEndereco(new GumgaAddress("87707110", "Rua", "Ebano pereira", "160", "Casa", "Nossa sr de fatima", "Paranavaí", "Paraná", "Brasil"));
            funcionario.setEmail(new GumgaEMail("rafael@gumga.com.br"));
            funcionario.setDataNascimento(new Date(System.currentTimeMillis()));
            funcionario.setCpf(new GumgaCPF("546465654"));
            funcionario.setCapacidades(new HashSet<>());
            funcionario.setAtivo(new GumgaBoolean(true));
            servico = new Servico();
            servico.setNome("Implementação");
            servico.setCodigoUniversal("10");
            servicoService.save(servico);
            itemPedidoServico = new ItemPedidoServico();
            itemPedidoServico.setHoras(8);
            itemPedidoServico.setServico(servico);
            itemPedidoServicoService.save(itemPedidoServico);
            itemPedidoServicos.add(itemPedidoServico);
            funcionario.getCapacidades().add(servico);

            servico = new Servico();
            servico.setNome("Configuração");
            servico.setCodigoUniversal("15");
            servicoService.save(servico);
            funcionario.getCapacidades().add(servico);
            funcionarioService.save(funcionario);

            funcionario = new Funcionario();
            funcionario.setNome("Igor santana");
            funcionario.setTelefone(new GumgaPhoneNumber("5654645456"));
            funcionario.setHorarios(horarios);
            funcionario.setEndereco(new GumgaAddress("87707150", "Avenida", "Martin luther king", "1460", "Casa", "Centro", "Paranavaí", "Paraná", "Brasil"));
            funcionario.setEmail(new GumgaEMail("igor@gumga.com.br"));
            funcionario.setDataNascimento(new Date(System.currentTimeMillis()));
            funcionario.setCpf(new GumgaCPF("65464841346"));
            funcionario.setCapacidades(new HashSet<>());
            funcionario.setAtivo(new GumgaBoolean(true));
            servico = new Servico();
            servico.setNome("Manutenção");
            servico.setCodigoUniversal("20");
            servicoService.save(servico);
            funcionario.getCapacidades().add(servico);
            servico = new Servico();
            servico.setNome("Limpeza");
            servico.setCodigoUniversal("40");
            servicoService.save(servico);
            funcionario.getCapacidades().add(servico);
            funcionarioService.save(funcionario);

            System.out.println("Inserindo pedido");
            pedido = new Pedido();
            pedido.setProdutos(itemPedidoProdutos);
            pedido.setCliente(cliente);
            pedido.setNumero("5634");
            pedido.setQuando(new Date(System.currentTimeMillis()));
            pedido.setEnderecoDeEntrega(new GumgaAddress("87707110", "Rua", "Ebano pereira", "160", "Casa", "Nossa sr de fatima", "Paranavaí", "Paraná", "Brasil"));
            pedido.setServicos(itemPedidoServicos);
            pedidoService.save(pedido);

        } else {
            System.out.println("PILOTO COM DADOS");
        }
    }

    public boolean estaVazio() {
        SearchResult<Marca> pesquisa = marcaService.pesquisa(new QueryObject());
        return pesquisa.getCount() == 0;
    }

}
