/*
* Gerado automaticamente por GUMGAGenerator em 12/08/2015 11:46:54
*/


package br.com.empresa.piloto.domain.model;

import gumga.framework.domain.GumgaModel;
import gumga.framework.domain.GumgaMultitenancy;
import java.io.Serializable;
import java.util.*;
import java.math.BigDecimal;
import javax.persistence.*;
import gumga.framework.domain.domains.*;
import org.hibernate.annotations.Columns;
import org.hibernate.search.annotations.Field;
import org.hibernate.search.annotations.Indexed;
import org.hibernate.envers.Audited;
import com.fasterxml.jackson.annotation.JsonIgnore;

@GumgaMultitenancy
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_PEDIDO")
@Indexed
@Audited
@Entity
public class Pedido extends GumgaModel<Long> implements Serializable {

    @Version
    private Integer version;


    //@Field //Descomente para ser utilizado na busca multientidades
    private String numero;
    //@Field //Descomente para ser utilizado na busca multientidades
    @Temporal(TemporalType.TIMESTAMP)
    private Date quando;
    //@Field //Descomente para ser utilizado na busca multientidades
    @ManyToOne
    private Cliente cliente;
    //@Field //Descomente para ser utilizado na busca multientidades
     @Columns(columns = {
     @Column(name = "enderecoDeEntrega_zip_code"),
     @Column(name = "enderecoDeEntrega_premisse_type"),
     @Column(name = "enderecoDeEntrega_premisse"),
     @Column(name = "enderecoDeEntrega_number"),
     @Column(name = "enderecoDeEntrega_information"),
     @Column(name = "enderecoDeEntrega_neighbourhood"),
     @Column(name = "enderecoDeEntrega_localization"),
     @Column(name = "enderecoDeEntrega_state"),
     @Column(name = "enderecoDeEntrega_country")
     })
    private GumgaAddress enderecoDeEntrega;
    //@Field //Descomente para ser utilizado na busca multientidades
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ItemPedidoProduto> produtos;
    //@Field //Descomente para ser utilizado na busca multientidades
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ItemPedidoServico> servicos;

    public Pedido(){
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public Date getQuando() {
        return quando;
    }

    public void setQuando(Date quando) {
        this.quando = quando;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public GumgaAddress getEnderecoDeEntrega() {
        return enderecoDeEntrega;
    }

    public void setEnderecoDeEntrega(GumgaAddress enderecoDeEntrega) {
        this.enderecoDeEntrega = enderecoDeEntrega;
    }

    public List<ItemPedidoProduto> getProdutos() {
        return produtos;
    }

    public void setProdutos(List<ItemPedidoProduto> produtos) {
        this.produtos = produtos;
    }

    public List<ItemPedidoServico> getServicos() {
        return servicos;
    }

    public void setServicos(List<ItemPedidoServico> servicos) {
        this.servicos = servicos;
    }

}
