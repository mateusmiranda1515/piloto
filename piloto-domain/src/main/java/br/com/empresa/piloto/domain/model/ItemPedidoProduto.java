/*
* Gerado automaticamente por GUMGAGenerator em 12/08/2015 11:46:55
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
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_ITEMPEDIDOPRODUTO")
@Indexed
@Audited
@Entity
public class ItemPedidoProduto extends GumgaModel<Long> implements Serializable {

    @Version
    private Integer version;


    //@Field //Descomente para ser utilizado na busca multientidades
    @ManyToOne
    private Produto produto;
    //@Field //Descomente para ser utilizado na busca multientidades
    private Integer quantidade;
    //@Field //Descomente para ser utilizado na busca multientidades
    private GumgaMoney valor;
    //@Field //Descomente para ser utilizado na busca multientidades
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Entrega> entregas;

    public ItemPedidoProduto(){
    }

    public Produto getProduto() {
        return produto;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public GumgaMoney getValor() {
        return valor;
    }

    public void setValor(GumgaMoney valor) {
        this.valor = valor;
    }

    public List<Entrega> getEntregas() {
        return entregas;
    }

    public void setEntregas(List<Entrega> entregas) {
        this.entregas = entregas;
    }

}
